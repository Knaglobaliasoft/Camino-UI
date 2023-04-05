import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import logo from '../../Assets/Images/logo.png';
import './Header.scss';

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='main-header'>
            <button className='home-btn' onClick={() => navigate('/welcome')}><BiChevronLeft />Home</button>
            <img src={logo} alt='logo' className='logo' />
            <button className='new-btn border-0' onClick={() => navigate('/newpatient')}>Add New Patient</button>
        </div>
    )
}

export default Header