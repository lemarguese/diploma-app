export type IUserRole = 'member' | 'admin'

export interface AuthData {
    fullName: string,
    email: string,
    password: string,
    role: IUserRole
}

export type AuthLogin = Pick<AuthData, 'email' | 'password'>
