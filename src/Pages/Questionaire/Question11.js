import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const Question11 = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState('');
    return (
        <div className='new-patient question-three'>
            <div className='bg-lights'>
                <QuestionaireHeader nav="/question10" />
                <div className='questionaire-data'>
                    <h1 className='quarter'>If yes, which of these do you use? (Select one or more)</h1>
                    <div className='experience'>
                        <button className={select === "never" ? 'select-btn' : ''} onClick={() => setSelect("never")}>Cane</button>
                        <button className={select === "rarely" ? 'select-btn' : ''} onClick={() => setSelect("rarely")}>Walker</button>
                        <button className={select === "time" ? 'select-btn' : ''} onClick={() => setSelect("time")}>Rollator</button>
                        <button className={select === "week" ? 'select-btn' : ''} onClick={() => setSelect("week")}>Crutches</button>
                        <button className={select === "week" ? 'select-btn' : ''} onClick={() => setSelect("week")}>Other</button>
                    </div>
                    <div className='text-center'>
                        <button className={select !== '' ? 'next-btn select-btn' : 'next-btn'} onClick={() => navigate('/addnewpatient')}>Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question11