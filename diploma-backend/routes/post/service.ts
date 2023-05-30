import {IPost} from "../../types/post.types";
import PostModel from "../../db/models/post.model";
import mongoose from "mongoose";
import CategoryService from "../category/service";

export default class PostService {
    static async create(data: IPost) {
        console.log(data)
        const post = await new PostModel(data);
        await post.save();
        await CategoryService.addPostToCategory(post)
        return post;
    }

    static async getPosts() {
        return PostModel.find();
    }

    static async getPostById (postId: string) {
        return PostModel.findOne({_id: postId as unknown as mongoose.Types.ObjectId})
    }

    static async likeAPost({_id, likes}: IPost) {
        return PostModel.findOneAndUpdate({_id: _id as unknown as mongoose.Types.ObjectId}, {
            $inc: {likes: likes + 1}
        }, {new: true});
    }
}
