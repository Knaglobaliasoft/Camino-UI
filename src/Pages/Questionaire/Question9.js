import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const Question9 = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState('');
    return (
        <div className='new-patient question-three'>
            <div className='bg-lights'>
                <QuestionaireHeader nav="/question8" />
                <div className='questionaire-data'>
                    <h1 className='quarter'>By yourself and without using any special equipment, how much difficulty do you have walking up 10 steps of stairs without resting?</h1>
                    <div className='experience'>
                        <button className={select === "never" ? 'select-btn' : ''} onClick={() => setSelect("never")}>No difficulty</button>
                        <button className={select === "rarely" ? 'select-btn' : ''} onClick={() => setSelect("rarely")}>Some difficulty</button>
                        <button className={select === "time" ? 'select-btn' : ''} onClick={() => setSelect("time")}>Much difficulty</button>
                        <button className={select === "week" ? 'select-btn' : ''} onClick={() => setSelect("week")}>Unable to do so</button>
                    </div>
                    <div className='text-center'>
                        <button className={select !== '' ? 'next-btn select-btn' : 'next-btn'} onClick={() => navigate('/question10')}>Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question9