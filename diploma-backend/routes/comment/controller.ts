import {responseWrapper} from "../../utils/utils";
import CommentService from "./service";

export const comment = async (req: any, res: any) => {
    const comment = await CommentService.commentAPost(req.body)
    if (!comment) return res.status(400).json(responseWrapper(null, 'Error while commenting post.', false))
    res.status(200).json(responseWrapper(comment, 'Post commented successfully!', true))
}
