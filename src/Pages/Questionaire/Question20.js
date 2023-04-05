import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const Question20 = () => {
    const navigate = useNavigate();
    return (
        <div className='new-patient question-three'>
            <div className='bg-lights thanks-main'>
                <QuestionaireHeader nav="/question18" />
                <div className='questionaire-data'>
                    <h1 className='get-quarter'>Thank you</h1>
                    <div className='text-center'>
                        <button className='select-btn next-btn' onClick={() => navigate('/assessment?complited=true')} >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question20