import AuthService from "./service";

export const login = async (req: any, res: any) => {
    const user = await AuthService.logIn(req.body);
    if (!user) return res.status(400).json({ success: false });
    res.status(200).json(user)
}
