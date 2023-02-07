import React from 'react';

type UserPropsType = {
    name:string
    age:number
    location:string
}

export const User = (props:UserPropsType) => {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.age}</span>
            <span>{props.location}</span>
        </div>
    );
};

