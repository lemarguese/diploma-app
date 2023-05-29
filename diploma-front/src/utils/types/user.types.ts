export type IUserRole = 'admin' | 'member'

export interface IUser {
    fullName: string,
    email: string,
    password: string,
    role: IUserRole
}
