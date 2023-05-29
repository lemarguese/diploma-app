import PostService from "./service";
import {responseWrapper} from "../../utils/utils";

export const create = async (req: any, res: any) => {
    const created = await PostService.create(req.body);
    if (!created) return res.status(400).json(responseWrapper(null, 'Error while creating post.', false))
    res.status(201).json(responseWrapper(created, 'Post successfully created!', true))
}

export const get = async (req: any, res: any) => {
    const posts = await PostService.getPosts();
    res.status(200).json(responseWrapper(posts, 'success', true))
}

export const like = async (req: any, res: any) => {
    const likedPost = await PostService.likeAPost(req.body);
    if (!likedPost) return res.status(400).json(responseWrapper(null, 'Error while liking post.', false))
    res.status(200).json(responseWrapper(likedPost, 'Post liked!', true))
}

