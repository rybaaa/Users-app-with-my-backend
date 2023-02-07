import React from 'react';
import {useAppDispatch, useAppSelector} from "../app/store";
import {fetchUsersTC, usersSelector} from "./usersReducer";
import {User} from "./User/User";
import Button from "@mui/material/Button";
import {NewUserForm} from "./NewUserForm/NewUserForm";
import s from '../users/Users.module.scss'

export const Users = () => {
    const users = useAppSelector(usersSelector)
    const dispatch = useAppDispatch()

    const usersList = users.map((u) => {
        return <User key={u.id} name={u.name} age={u.age} location={u.location}/>
    })

    const GetUsersHandler = () => {
        dispatch(fetchUsersTC())
    }
    return (
        <div className={s.wrapper}>
            <NewUserForm/>
            <Button
                style={{width:'150px'}}
                className={s.btn}
                    variant={'contained'}
                    onClick={GetUsersHandler}>Get Users</Button>
            {usersList}
        </div>
    );
};
