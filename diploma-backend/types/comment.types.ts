import {IUser} from "./auth.types";

export interface IComment {
    author: IUser,
    text: string
}

export interface ICommentReq {
    postId: string,
    userId: string,
    commentText: string
}
