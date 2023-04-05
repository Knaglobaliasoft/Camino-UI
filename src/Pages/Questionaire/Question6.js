import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const Question6 = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState('');
    return (
        <div className='new-patient question-three'>
            <div className='bg-lights'>
                <QuestionaireHeader nav="/question5" />
                <div className='questionaire-data'>
                    <h1 className='quarter'>By yourself and without using any special equipment, how much difficulty do you have walking for a quarter of a mile (that is about 2 or 3 blocks)?</h1>
                    <div className='experience'>
                        <button className={select === "never" ? 'select-btn' : ''} onClick={() => setSelect("never")}>No difficulty</button>
                        <button className={select === "rarely" ? 'select-btn' : ''} onClick={() => setSelect("rarely")}>Some difficulty</button>
                        <button className={select === "time" ? 'select-btn' : ''} onClick={() => setSelect("time")}>Much Difficulty</button>
                        <button className={select === "week" ? 'select-btn' : ''} onClick={() => setSelect("week")}>Unable to do so (3 meters max walk, <br /> don’t feel secure enough)</button>
                    </div>
                    <div className='text-center'>
                        <button className={select !== '' ? 'next-btn select-btn' : 'next-btn'} onClick={() => navigate('/question7')}>Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question6