import * as express from 'express';
import {login, register} from "./controller";
const router = express.Router();

router.post('/login', login)
router.post('/register', register)

export default router;
