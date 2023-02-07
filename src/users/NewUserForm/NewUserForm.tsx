import React from 'react';
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import {useAppDispatch} from "../../app/store";
import {FormGroup} from "@mui/material";
import * as yup from 'yup'
import s from '../NewUserForm/NewUserForm.module.scss'
import Button from "@mui/material/Button";
import {createNewUserTC} from "../usersReducer";

export const NewUserForm = () => {
    const dispatch = useAppDispatch()
    const validationSchema = yup.object({
        name: yup
            .string()
            .max(15, 'Maximum number of characters 15')
            .required('Name is required'),
        age: yup.string().required('Age is required').max(3, 'Not correct age'),
        location: yup.string().required('Location is required').max(15, 'Maximum length is 15 symbols')
    })
    const {errors, touched, handleSubmit, getFieldProps, resetForm} = useFormik({
        initialValues: {
            name: '',
            age: '',
            location: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            dispatch(createNewUserTC(values))
            resetForm();
        },
    })
    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit}>
                <FormGroup style={{display: 'flex', alignItems: 'center'}}>
                    <div className={s.form}>
                        <div className={s.form_item}>
                            <h4>Name</h4>
                            <TextField
                                required
                                id="name"
                                label="Required"
                                placeholder={'Name'}
                                {...getFieldProps('name')}
                            />
                            <div className={s.error}>{touched.name && errors.name}</div>
                        </div>
                        <div className={s.form_item}>
                            <h4>Age</h4>
                            <TextField
                                required
                                id="age"
                                label="Required"
                                placeholder={'Age'}
                                {...getFieldProps('age')}
                            />
                            <div className={s.error}>{touched.age && errors.age}</div>
                        </div>
                        <div className={s.form_item}>
                            <h4>Location</h4>
                            <TextField
                                required
                                id="location"
                                label="Required"
                                placeholder={'Location'}
                                {...getFieldProps('location')}
                            />
                            <div className={s.error}>{touched.location && errors.location}</div>
                        </div>
                    </div>
                    <Button
                        variant={'contained'}
                        type={'submit'}
                        className={s.btn}
                        style={{width: '150px'}}
                    >
                        Add new user
                    </Button>
                </FormGroup>
            </form>
        </div>
    );
};

