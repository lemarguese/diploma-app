import * as express from "express";

const router = express.Router();
import {get, create, like} from './controller'
import {permission} from "../../middleware/permit";

router.get('/', get)
router.post('/', permission(['admin']), create)
router.post('/like', like)

export default router;
