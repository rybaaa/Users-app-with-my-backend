import axios from "axios";
import {CreateUserPayloadType, CreateUserResponseType, UserType} from "../users/usersReducer";

const instance = axios.create({
    baseURL: 'https://express-app-vert.vercel.app/',
})

export const usersApi = {
    getUsers() {
        return instance.get<UserType[]>('users')},
    createUser(payload: CreateUserPayloadType){
        return instance.post<CreateUserResponseType>('users', payload)
    }
}
