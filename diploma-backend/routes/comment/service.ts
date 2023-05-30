import {ICommentReq} from "../../types/comment.types";
import UserService from "../user/service";
import CommentModel from "../../db/models/comment.model";
import PostModel from "../../db/models/post.model";
import mongoose from "mongoose";

export default class CommentService {
    static async commentAPost({userId, postId, commentText}: ICommentReq) {
        const user = await UserService.getUserById(userId)
        const newComment = await new CommentModel({author: user, commentText})
        await newComment.save()
        return PostModel.findOneAndUpdate({_id: postId as unknown as mongoose.Types.ObjectId}, {
            $push: {comments: newComment}
        }, {new: true});
    }
}
