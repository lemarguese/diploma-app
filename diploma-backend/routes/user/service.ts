import {AuthData} from "../../types/auth.types";
import UserModel from "../../db/models/user.model";

export default class UserService {

    static async getAllUsers (data: AuthData) {
        // return data.role !== 'admin' ?? UserModel.find();
        return UserModel.find()
    }

    static async createUser (data: AuthData) {
        try {
            const exists = await UserModel.exists(data)
            if (exists) return false
            const newUser = await new UserModel(data);
            await newUser.save();
            return newUser;
        } catch (e) { return false }
    }
}
