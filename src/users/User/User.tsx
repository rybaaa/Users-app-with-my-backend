import React from 'react';
import s from '../User/User.module.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton, Tooltip} from "@mui/material";

type UserPropsType = {
    name:string
    age:number
    location:string
}

export const User = (props:UserPropsType) => {
    return (
        <div className={s.wrapper}>
            <span className={s.name}>{props.name}</span>
            <span>{props.age}</span>
            <span>{props.location}</span>
            <Tooltip title="Learn">
            <span>
              <IconButton


              >
                <DeleteIcon />
              </IconButton>
            </span>
            </Tooltip>
        </div>
    );
};

