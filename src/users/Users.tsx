import React from 'react';
import {useAppDispatch, useAppSelector} from "../app/store";
import {fetchUsersTC, usersSelector} from "./usersReducer";
import {User} from "./User/User";

export const Users = () => {
    const users = useAppSelector(usersSelector)
    const dispatch = useAppDispatch()

    const usersList = users.map((u)=>{
        return <User key={u.id} name={u.name} age={u.age} location={u.location}/>
    })

    const GetUsersHandler = () => {
        dispatch(fetchUsersTC())
    }
    return (
        <div>
            <button onClick={GetUsersHandler}>Get Users</button>
            {usersList}
        </div>
    );
};
