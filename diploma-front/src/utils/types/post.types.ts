import {IComment} from "./comment.types";

export interface IPost {
    _id: string,
    title: string,
    description: string,
    photo: string,
    video: string,
    likes: number,
    comments: IComment[]
}

export interface IPostCreation {
    title: string,
    description: string,
    photo: string,
    video: string,
    category: string
}
