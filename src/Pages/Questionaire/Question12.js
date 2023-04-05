import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const Question12 = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState('');
    return (
        <div className='new-patient question-three'>
            <div className='bg-lights'>
                <QuestionaireHeader nav="/addnewpatient" />
                <div className='questionaire-data'>
                    <h1 className='quarter'>If yes, how often do you use a walking aid in your daily life?</h1>
                    <div className='experience'>
                        <button className={select === "never" ? 'select-btn' : ''} onClick={() => setSelect("never")}>Occasionally, for longer journeys</button>
                        <button className={select === "rarely" ? 'select-btn' : ''} onClick={() => setSelect("rarely")}>Occasionally, when I get tired</button>
                        <button className={select === "time" ? 'select-btn' : ''} onClick={() => setSelect("time")}>Sometimes</button>
                        <button className={select === "week" ? 'select-btn' : ''} onClick={() => setSelect("week")}>Often</button>
                        <button className={select === "week" ? 'select-btn' : ''} onClick={() => setSelect("week")}>Always</button>
                    </div>
                    <div className='text-center'>
                        <button className={select !== '' ? 'next-btn select-btn' : 'next-btn'} onClick={() => navigate('/question13')}>Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question12