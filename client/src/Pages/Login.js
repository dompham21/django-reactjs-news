import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../Components/Authentication/LoginForm';
import loginImage from '../Assets/Images/illustration_login.png'

function Login() {
    return (
        <div className="auth-container flex">
            <div className="auth__papper flex">
                <h3>Hi, Welcome Back</h3>
                <img src={String(loginImage)} alt="login image" />
            </div>
            <div className="auth__form flex">
                <div className="auth__form-detail">
                    <div className="auth__form-header">
                        <h3 className="auth__form-title">Sign into your account</h3>
                        <p className="auth__form-description">Enter your details below.</p>
                    </div>
                    <LoginForm/>
                    <div className="auth__form-footer">
                        <span>Don't have an account?<Link to ='/register' className="link-auth"> Register here</Link></span>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Login
