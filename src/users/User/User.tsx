import React from 'react';
import s from '../User/User.module.scss'

type UserPropsType = {
    name:string
    age:number
    location:string
}

export const User = (props:UserPropsType) => {
    return (
        <div className={s.wrapper}>
            <span>{props.name}</span>
            <span>{props.age}</span>
            <span>{props.location}</span>
        </div>
    );
};

