import {IComment} from "./comment.types";

export interface IPost {
    _id: string,
    title: string,
    category: string,
    description: string,
    photo: string,
    video: string,
    likes: number,
    comments: IComment[]
}
