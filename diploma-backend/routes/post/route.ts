import * as express from "express";
const router = express.Router();
import {get, create, like, getById} from './controller'
import {permission} from "../../middleware/permit";

router.get('/', get)
router.post('/', permission(['admin']), create)
router.post('/like', permission(['member']), like)
router.get('/:postId', getById)

export default router;
