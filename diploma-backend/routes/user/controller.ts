import UserService from "./service";

export const get = async (req: any, res: any) => {
    const users = await UserService.getAllUsers(req.body)
    if (!users) res.status(400).send('Wrong request')
    res.status(200).json(users)
}

export const create = async (req: any, res: any) => {
    const created = await UserService.createUser(req.body);
    if (!created) return res.status(400).send({ success: false });
    res.status(201).json({ msg: 'User successfully created' })
}
