import * as express from 'express';
import {create, get} from "./controller";
import {permission} from "../../middleware/permit";
const router = express.Router();

router.get('/', [permission(['admin'])], get)
router.post('/', [permission(['admin'])], create)

export default router;
