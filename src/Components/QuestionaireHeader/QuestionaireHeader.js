import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';
import './QuestionaireHeader.scss';

const QuestionaireHeader = ({ nav }) => {
    const navigate = useNavigate()

    return (
        <div className='questionaire-header'>
            <button className='home-btn' onClick={() => navigate(nav)}>Back</button>
            <img src={logo} alt='logo' className='logo' />
            <button className='new-btn' onClick={() => navigate('/Questionnaireclose')}>Close</button>
        </div>
    )
}

export default QuestionaireHeader