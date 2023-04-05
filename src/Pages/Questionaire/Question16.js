import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const Question16 = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState('');
    return (
        <div className='new-patient question-three'>
            <div className='bg-lights'>
                <QuestionaireHeader nav="/question15" />
                <div className='questionaire-data'>
                    <h1 className='get-quarter2'>Going up or down stairs?</h1>
                    <div className='experience'>
                        <button className={select === "never" ? 'select-btn' : ''} onClick={() => setSelect("never")}>Not at all concerned</button>
                        <button className={select === "rarely" ? 'select-btn' : ''} onClick={() => setSelect("rarely")}>Somewhat concerned</button>
                        <button className={select === "time" ? 'select-btn' : ''} onClick={() => setSelect("time")}>Fairly concerned</button>
                        <button className={select === "week" ? 'select-btn' : ''} onClick={() => setSelect("week")}>Very concerned</button>
                    </div>
                    <div className='text-center'>
                        <button className={select !== '' ? 'next-btn select-btn' : 'next-btn'} onClick={() => navigate('/question17')}>Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question16