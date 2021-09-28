import React from 'react'
import { useFormik, FormikProvider, Form, FastField } from 'formik';
// import { useSnackbar } from 'notistack5';
import { Link  } from 'react-router-dom';
import {  Button } from 'antd';
import * as Yup from 'yup';
import InputField from '../CustomField/InputField';
import CheckboxField from '../CustomField/CheckboxField';

function RegisterForm() {
    // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const LoginSchema = Yup.object().shape({
        name: Yup.string().required('Name is required').min(2,'Too Short!').max(64, 'Too Long!'),
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
      });

    const onLoginSubmit = () => {
        console.log("submit")
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },    
        validationSchema: LoginSchema,
        onSubmit: onLoginSubmit

    })
    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;
    console.log(getFieldProps)
    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <FastField
                    label={'Name'}
                    name="name"
                    type='text'
                    component={InputField}
                />
                <FastField
                    label={'Email address'}
                    name="email"
                    type='email'
                    component={InputField}
                />
                <FastField
                    label={'Password'}
                    name="password"
                    type='password'
                    component={InputField}
                />
        
                <Button htmlType="submit" loading={isSubmitting} className="btn-auth">
                    Register
                </Button>
            </Form>
        </FormikProvider>
    )
}

export default RegisterForm
