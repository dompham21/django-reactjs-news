import React from 'react'
import { useFormik, FormikProvider, Form, FastField, Field } from 'formik';
// import { useSnackbar } from 'notistack5';
import { Link, Link as RouterLink } from 'react-router-dom';
import {  Input, Button, Checkbox } from 'antd';
import * as Yup from 'yup';
import InputField from '../CustomField/InputField';
import CheckboxField from '../CustomField/CheckboxField';
import { useDispatch } from 'react-redux';
import { fetchLoginAction } from '../../Actions/auth_actions';

function LoginForm() {
    // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
      });

    const onLoginSubmit = () => {
        dispatch(fetchLoginAction(values));
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false
        },    
        validationSchema: LoginSchema,
        onSubmit: onLoginSubmit

    })
    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;
    // console.log(getFieldProps)
    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
                <div className="flex flex-ai-c flex-jc-sb" style={{marginBottom: "24px"}}>
                    <FastField
                        name="remember"
                        type="checkbox"
                        label="Remember me"
                        
                        component={CheckboxField}
                    />
                    <Link className="link-auth" to="/forgot-password">Forgot password?</Link>
                </div>
               
                <Button htmlType="submit" loading={isSubmitting} className="btn-auth">
                    Login
                </Button>
            </Form>
        </FormikProvider>
    )
}

export default LoginForm
