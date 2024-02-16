import { IPrivilege } from "./privilege"

export interface IUser {
    _id: string | null,
    lastName: string,
    firstName: string,
    birthDate: Date,
    gender: {
        code: string,
        name: string | null
    }
    email: string,
    phoneNumber: string,
    password: string,
    privilege: IPrivilege | null,
    picture?: string   
}