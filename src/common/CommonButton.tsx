import React from 'react';
import Button from "@mui/material/Button";

type CommonButtonPropsType = {
    title: string
    onClick: () => void
}

export const CommonButton = (props: CommonButtonPropsType) => {
    return (
        <Button
            style={{width: '150px'}}
            variant={'contained'}
            onClick={props.onClick}>{props.title}
        </Button>
    );
};

