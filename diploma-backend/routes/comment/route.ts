import {permission} from "../../middleware/permit";
import * as express from "express";
import {comment, deleteComment, upvoteForComment} from "./controller";

const router = express.Router();

router.post('/', permission(['member', 'admin']), comment)
router.put('/', permission(['member', 'admin']), upvoteForComment)
router.delete('/:postId/:commentId', permission(['member', 'admin']), deleteComment)

export default router;
