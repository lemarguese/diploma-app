import {ILikePost, IPost, IPostCreation} from "../../utils/types/post.types";
import instance from "../../axios/axios.instance";
import {IRes} from "../../utils/types/api.types";

export const getPosts = async (): Promise<IRes<IPost[]>> => {
    return (await instance.get('/posts')).data
}

export const getLikedPost = async (userId: string): Promise<IRes<IPost[]>> => {
    return (await instance.get(`/posts/like/${userId}`, {
        headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}
    })).data
}

export const likeAPost = async (data: ILikePost): Promise<IRes<IPost[]>> => {
    return (await instance.post('/posts/like', data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })).data
}

export const createPost = async (data: IPostCreation): Promise<IRes<IPost>> => {
    return (await instance.post('/posts', data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })).data
}

export const getPostById = async (postId: string, userId: string): Promise<IRes<IPost>> => {
    return (await instance.get(`/posts/view/${postId}/${userId}`)).data
}
