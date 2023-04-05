import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const Question8 = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState('');
    return (
        <div className='new-patient question-three'>
            <div className='bg-lights'>
                <QuestionaireHeader nav="/question7" />
                <div className='questionaire-data'>
                    <h1 className='quarter'>Using your preferred walking aid, what is the maximum distance on flat ground you would feel confident walking unaided?</h1>
                    <div className='experience'>
                        <button className={select === "never" ? 'select-btn' : ''} onClick={() => setSelect("never")}>I don’t use a walking aid</button>
                        <button className={select === "rarely" ? 'select-btn' : ''} onClick={() => setSelect("rarely")}>Half a mile or more</button>
                        <button className={select === "time" ? 'select-btn' : ''} onClick={() => setSelect("time")}>¼ miles</button>
                        <button className={select === "week" ? 'select-btn' : ''} onClick={() => setSelect("week")}>300 feet</button>
                        <button className={select === "week" ? 'select-btn' : ''} onClick={() => setSelect("week")}>50 feet or less</button>
                    </div>
                    <div className='text-center'>
                        <button className={select !== '' ? 'next-btn select-btn' : 'next-btn'} onClick={() => navigate('/question9')}>Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question8