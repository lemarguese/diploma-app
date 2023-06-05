import {ILikePost, IPost} from "../../types/post.types";
import PostModel from "../../db/models/post.model";
import mongoose from "mongoose";
import CategoryService from "../category/service";
import UserService from "../user/service";
import {IUser} from "../../types/auth.types";

export default class PostService {
    static async create(data: IPost) {
        const post = await new PostModel(data);
        await post.save();
        await CategoryService.addPostToCategory(post)
        return post;
    }

    static async getPosts() {
        return PostModel.find().populate('liked').populate({
            path: 'comments',
            model: 'Comment',
            populate: [{path: 'author', model: 'User'}, {path: 'upvote', model: 'User'}],
        });
    }

    static async getPostById(postId: string) {
        return PostModel.findOne({_id: postId as unknown as mongoose.Types.ObjectId}).populate('liked').populate({
            path: 'comments',
            model: 'Comment',
            populate: [{path: 'author', model: 'User'}, {path: 'upvote', model: 'User'}],
        });
    }

    static async likeAPost({userId, postId}: ILikePost) {
        const user = await UserService.getUserById(userId)
        const post = await this.getPostById(postId)
        await UserService.addLikedPost(user, post)
        return PostModel.updateOne({_id: post._id}, {
            $push: {liked: user}
        }, {new: true}).populate({
            path: 'comments',
            model: 'Comment',
            populate: [{path: 'author', model: 'User'}, {path: 'upvote', model: 'User'}],
        }).populate('liked');
    }

    static async getLikedPostsByUser(userId: string) {
        const posts = await this.getPosts();
        return posts.filter(post => post.liked.find((user: IUser) => user?._id?.toString() === userId))
    }

    static async update(postId: string, options = {}) {
        return PostModel.findOneAndUpdate({_id: postId as unknown as mongoose.Types.ObjectId}, options)
    }

    static async userViewed(postId: string, userId: string) {
        const user = await UserService.getUserById(userId);
        const hasViewed = (await this.getPostById(postId)).viewed.find((viewedUser: mongoose.Types.ObjectId) => viewedUser.toString() === user._id.toString());
        if (hasViewed) return
        this.update(postId, {
            $push: {viewed: user}
        })
    }
}
