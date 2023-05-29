import UserService from "./service";
import {responseWrapper} from "../../utils/utils";

export const get = async (req: any, res: any) => {
    const users = await UserService.getAllUsers(req.body)
    if (!users) res.status(400).json('Wrong request')
    res.status(200).json(responseWrapper(users, 'success', true))
}

export const create = async (req: any, res: any) => {
    const user = await UserService.createUser(req.body);
    if (!user) return res.status(400).json({success: false});
    res.status(201).json(responseWrapper(user, 'User successfully created', true))
}
