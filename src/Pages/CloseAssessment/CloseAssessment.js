import React from 'react';
import { useNavigate } from 'react-router-dom';

const CloseAssessment = () => {
    const navigate = useNavigate()
    return (
        <div className='new-patient questionaire-close'>
            <div className='bg-lights'>
                <h1>Close assessment,are you sure?</h1>
                <p>The responses will not be saved</p>
                <div class="btn-data">
                    <button class="signup-btn" onClick={() => navigate('/assessment')}>No, go back</button>
                    <button class="login-btn" onClick={() => navigate('/profileguide')}>Yes, close assessment</button>
                </div>
            </div>
        </div>
    )
}

export default CloseAssessment