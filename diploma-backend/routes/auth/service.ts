import {AuthLogin} from "../../types/auth.types";
import UserModel from "../../db/models/user.model";

export default class AuthService {

    static async logIn (data: AuthLogin) {
        try {
            return await UserModel.findOne(data, {fullName: 1, email: 1, role: 1, _id: 0});
        } catch (e) { return false }
    }
}
