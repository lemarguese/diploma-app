import * as express from "express";

const router = express.Router();
import {get, create, like, getByIdAndView, getLikedPostsByUser} from './controller'
import {permission} from "../../middleware/permit";
import {auth} from "../../middleware/jwt";

router.get('/', get)
router.post('/', [auth, permission(['admin'])], create)
router.post('/like', [auth, permission(['admin', 'member'])], like)
router.get('/view/:postId/:userId', getByIdAndView)
router.get('/like/:userId', [auth, permission(['member', 'admin'])], getLikedPostsByUser)

export default router;
