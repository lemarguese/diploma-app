export type IUserRole = null | 'admin' | 'member'

export interface IUser {
    fullName: string,
    email: string,
    password: string,
    role: IUserRole
}

export interface IUserRes {
    user: IUser,
    accessToken: string
}

export interface IStateUser {
    user: IUser
}
