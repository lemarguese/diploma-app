export interface IPost {
    _id: string,
    title: string,
    description: string,
    photo: string,
    video: string,
    likes: number,
    //todo array of comments
    comments: string[]
}

export interface IPostCreation {
    title: string,
    description: string,
    photo: string,
    video: string
}
