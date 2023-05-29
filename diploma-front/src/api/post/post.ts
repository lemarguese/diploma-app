import {IPost} from "../../utils/types/post.types";
import instance from "../../axios/axios.instance";
import {IRes} from "../../utils/types/api.types";

export const getPosts = async (): Promise<IRes<IPost[]>> => {
    return (await instance.get('/posts')).data
}

export const likeAPost = async (data: IPost): Promise<IRes<IPost[]>> => {
    return (await instance.post('/posts/like', data)).data
}
