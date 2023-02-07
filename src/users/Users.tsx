import React from 'react';
import {useAppDispatch, useAppSelector} from "../app/store";
import {fetchUsersTC, usersSelector} from "./usersReducer";
import {NewUserForm} from "./NewUserForm/NewUserForm";
import s from '../users/Users.module.scss'
import {UsersTable} from "./UsersTable/UsersTable";
import {CommonButton} from "../common/CommonButton";

export const Users = () => {
    const users = useAppSelector(usersSelector)
    const dispatch = useAppDispatch()

    const getUsersHandler = () => {
        dispatch(fetchUsersTC())
    }
    console.log(users)
    return (
        <div className={s.wrapper}>
            <NewUserForm/>
            <CommonButton title={'Get Users'} onClick={getUsersHandler}/>
            {users && <UsersTable/>}
            {users && <div>LOADING</div>}
        </div>
    );
};
