import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const Question3 = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState('');

    return (
        <div className='new-patient question-three'>
            <div className='bg-lights'>
                <QuestionaireHeader nav="/questionaireid" />
                <div className='questionaire-data'>
                    <h1>Have you experienced any falls in the past 12 months?</h1>
                    <div className='experience'>
                        <button className={select === "once" ? 'select-btn' : ''} onClick={() => setSelect("once")}>Yes, once</button>
                        <button className={select === "time" ? 'select-btn' : ''} onClick={() => setSelect("time")}>Yes, several times</button>
                        <button className={select === "no" ? 'select-btn' : ''} onClick={() => setSelect("no")}>No</button>
                    </div>
                    <div className='text-center'>
                        <button className={select !== '' ? 'next-btn select-btn' : 'next-btn'} onClick={() => navigate('/question4')}>Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question3