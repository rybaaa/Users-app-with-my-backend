import React from 'react';
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";

export const DeleteIconComponent = () => {
    return (
        <Tooltip title="Delete user">
            <span>
              <IconButton>
                <DeleteIcon/>
              </IconButton>
            </span>
        </Tooltip>
    );
};

