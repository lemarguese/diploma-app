import {IStateUser} from "../../utils/types/user.types";

export const initialState: IStateUser = {
    user: {
        password: '',
        fullName: '',
        email: '',
        role: null
    }
}
