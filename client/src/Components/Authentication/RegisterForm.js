import React from 'react'
import { useFormik, FormikProvider, Form, FastField } from 'formik';
import { Link  } from 'react-router-dom';
import {  Button } from 'antd';
import * as Yup from 'yup';
import InputField from '../CustomField/InputField';
import { useDispatch, useSelector } from 'react-redux';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import { fetchRegisterAction } from '../../Actions/auth_actions';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const isMountedRef = useIsMountedRef();
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.auth.loading)
    let navigate = useNavigate();

    const LoginSchema = Yup.object().shape({
        username: Yup.string().required('Name is required'),
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().required('Password is required')
      });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',

        },    
        validationSchema: LoginSchema,
        onSubmit: (values, { setErrors, setSubmitting, resetForm }) => {
            
            dispatch(fetchRegisterAction(values, navigate));

            if (isMountedRef.current) {
                setSubmitting(isLoading);
 
                resetForm();           
            } 
                   
        }

    })
    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <FastField
                    label={'User name'}
                    name="username"
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
                <FastField
                    label={'Confirm password'}
                    name="confirmPassword"
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
