import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const Question7 = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState('');
    return (
        <div className='new-patient question-three'>
            <div className='bg-lights'>
                <QuestionaireHeader nav="/question6" />
                <div className='questionaire-data'>
                    <h1 className='quarter'>By yourself and without using any special equipment, how far would you feel confident walking unaided on flat ground?</h1>
                    <div className='experience'>
                        <button className={select === "never" ? 'select-btn' : ''} onClick={() => setSelect("never")}>Half a mile or more</button>
                        <button className={select === "rarely" ? 'select-btn' : ''} onClick={() => setSelect("rarely")}>¼ miles</button>
                        <button className={select === "time" ? 'select-btn' : ''} onClick={() => setSelect("time")}>300 feet</button>
                        <button className={select === "week" ? 'select-btn' : ''} onClick={() => setSelect("week")}>50 feet or less</button>
                    </div>
                    <div className='text-center'>
                        <button className={select !== '' ? 'next-btn select-btn' : 'next-btn'} onClick={() => navigate('/question8')}>Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question7