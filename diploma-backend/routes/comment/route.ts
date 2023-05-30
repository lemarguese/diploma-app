import {permission} from "../../middleware/permit";
import * as express from "express";
import {comment} from "./controller";

const router = express.Router();

router.post('/comment', permission(['member']), comment)
