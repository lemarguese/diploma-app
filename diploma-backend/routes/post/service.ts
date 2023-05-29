import {IPost} from "../../types/post.types";
import PostModel from "../../db/models/post.model";
import mongoose from "mongoose";

export default class PostService {
    static async create(data: IPost) {
        const post = await new PostModel(data);
        await post.save();
        return post;
    }

    static async getPosts() {
        return PostModel.find();
    }

    static async likeAPost(data: IPost) {
        return PostModel.findOneAndUpdate({_id: data._id as unknown as mongoose.Types.ObjectId}, {
            $inc: {likes: data.likes + 1}
        }, {new: true});
    }
}
