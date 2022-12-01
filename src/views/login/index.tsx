import React, { useEffect } from 'react'
import LoginForm from './components/loginForm'
import './index.less'
export default function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-form">
                    <div className="login-logo">
                        <span className="logo-text">后台-Admin</span>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>

    )
}
