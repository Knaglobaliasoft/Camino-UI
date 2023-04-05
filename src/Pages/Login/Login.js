import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../Assets/Images/logo.png';
import wheelChair from '../../Assets/Images/wheel-chair.png';
import './Login.scss';

const Login = () => {
    const navigate = useNavigate()
    localStorage.setItem("test", JSON.stringify([]))
    return (
        <>
            <div className='main-login'>
                <div>
                    <div className='movement'>
                        <div className='text-center'>
                            <img src={logo} alt='logo' />
                        </div>
                        <p>Movement is Magic</p>
                    </div>
                    <div className='text-center'>
                        <img src={wheelChair} alt='wheelChair' />
                    </div>
                    <div className='btn-data'>
                        <button className='signup-btn'>Sign Up</button>
                        <button className='login-btn' onClick={() => navigate('/welcome')}>Log in</button>
                    </div>
                    <p className='terms-poicy'>By signing up you agree to our <span>Terms of Use</span> and <span>Privacy Policy.</span></p>
                </div>
            </div>
        </>
    )
}

export default Login