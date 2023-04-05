import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const Question5 = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState('');
    return (
        <div className='new-patient question-three'>
            <div className='bg-lights'>
                <QuestionaireHeader nav="/question4" />
                <div className='questionaire-data'>
                    <h1>How often have you experienced problems with dizziness during the past year?</h1>
                    <div className='experience'>
                        <button className={select === "never" ? 'select-btn' : ''} onClick={() => setSelect("never")}>Never</button>
                        <button className={select === "rarely" ? 'select-btn' : ''} onClick={() => setSelect("rarely")}>Rarely (Less then once a month)</button>
                        <button className={select === "time" ? 'select-btn' : ''} onClick={() => setSelect("time")}>Sometimes (1-4 days per month)</button>
                        <button className={select === "week" ? 'select-btn' : ''} onClick={() => setSelect("week")}>Often (Several days a week)</button>
                    </div>
                    <div className='text-center'>
                        <button className={select !== '' ? 'next-btn select-btn' : 'next-btn'} onClick={() => navigate('/question6')}>Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question5