import {IComment} from "./comment.types";
import {CAuditory} from "./category.types";

export interface IPost {
    _id: string,
    title: string,
    auditory: CAuditory,
    description: string,
    photo: string,
    video: string,
    likes: number,
    comments: IComment[]
}
