import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader';

const AddnewPatient = () => {
    const navigate = useNavigate();
    return (
        <div className='new-patient question-three'>
            <div className='bg-lights question-patient'>
                <QuestionaireHeader nav="/question11" />
                <div className='questionaire-data'>
                    <h1 className='short-data'>Short Falls Efficacy Scale International</h1>
                    <p className='short-para'>Now we would like to ask some questions about how concerned you are about the possibility of falling. Please reply thinking about how you usually do the activity. If you currently don’t do the activity, please answer to show whether you think you would be concerned about falling if you did the activity.</p>
                    <div className='text-center'>
                        <button className="select-btn next-btn" onClick={() => navigate('/question12')}>Next Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddnewPatient