import React from 'react'
import { Link } from 'react-router-dom'

import registerImage from '../Assets/Images/illustration_register.png';
import RegisterForm from '../Components/Authentication/RegisterForm';

function Register() {
    return (
        <div className="auth-container flex">
            <div className="auth__papper flex">
                <h3>Manage the job more effectively with us</h3>
                <img src={String(registerImage)} alt="register image" />
            </div>
            <div className="auth__form flex">
                <div className="auth__form-detail">
                    <div className="auth__form-header">
                        <h3 className="auth__form-title">Get started absolutely free.</h3>
                        <p className="auth__form-description">Free forever. No credit card needed.</p>
                    </div>
                    <RegisterForm/>
                    <div className="auth__form-footer">
                        <span>Already have an account?<Link to ='/login' className="link-auth"> Login</Link></span>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Register
