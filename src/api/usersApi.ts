import axios from "axios";
import {UserType} from "../users/usersReducer";

const instance = axios.create({
    baseURL: 'https://express-app-vert.vercel.app/',
})

export const usersApi = {
    getUsers() {
        return instance.get<UserType[]>('users')}
}
