import {IUserRole} from "../types/auth.types";

export const permission = (permittedRoles: IUserRole[]) => {
    return (req: any, res: any, next: () => any) => {
        // console.log(req.body, res.locals)
        // const { role } = res;
        // if (role && permittedRoles.includes(role)) {
        //     next();
        // } else {
        //     res.status(403).send('Access denied');
        // }
        next()
    };
}
