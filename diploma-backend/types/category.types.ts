import {IPost} from "./post.types";

export interface ICategory {
    title: string,
    description: string,
    auditory: CAuditory,
    posts: IPost[]
}

export type CAuditory = 'parent' | 'young'
