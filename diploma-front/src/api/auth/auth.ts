import {ILogin, IRegister} from "../../utils/types/auth.types";
import {IRes} from "../../utils/types/api.types";
import instance from "../../axios/axios.instance";
import {IUser} from "../../utils/types/user.types";

export const register = async (data: IRegister): Promise<IRes> => {
    return (await instance.post('/user', data)).data
}

export const login = async (data: ILogin): Promise<IUser> => {
    return (await instance.post('/auth/login', data)).data
}
