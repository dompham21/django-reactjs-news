import React from 'react'
import { useFormik, FormikProvider, Form, FastField } from 'formik';
import { Link } from 'react-router-dom';
import {  Button } from 'antd';
import * as Yup from 'yup';
import InputField from '../CustomField/InputField';
import CheckboxField from '../CustomField/CheckboxField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginAction } from '../../Actions/auth_actions';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const isMountedRef = useIsMountedRef();
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.auth.loading)
    let navigate = useNavigate();


    const LoginSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    
    
  
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            remember: false
        },    
        validationSchema: LoginSchema,
        onSubmit:  (values, { setErrors, setSubmitting, resetForm }) => {
            
            dispatch(fetchLoginAction(values, navigate));
            
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
