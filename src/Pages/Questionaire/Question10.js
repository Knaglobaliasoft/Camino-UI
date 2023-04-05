import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const Question10 = () => {
    const navigate = useNavigate();
    const [select, setSelect] = useState('');
    return (
        <div className='new-patient question-three'>
            <div className='bg-lights'>
                <QuestionaireHeader nav="/question9" />
                <div className='questionaire-data'>
                    <h1 className='quarter'>Do you use any walking aids (e.g.: cane, walker, rollator, or crutches)?</h1>
                    <div className='experience'>
                        <button className={select === "never" ? 'select-btn' : ''} onClick={() => setSelect("never")}>Yes</button>
                        <button className={select === "rarely" ? 'select-btn' : ''} onClick={() => setSelect("rarely")}>No</button>
                    </div>
                    <div className='text-center'>
                        <button className={select !== '' ? 'next-btn select-btn' : 'next-btn'} onClick={() => navigate('/question11')}>Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question10