import React from 'react'
import { useNavigate } from "react-router-dom";


const QuestionnaireClose = () => {
    const history = useNavigate()
    const navigate = useNavigate();
    return (
        <div className='new-patient questionaire-close'>
            <div className='bg-lights'>
                <h1>Close questionnaire, are you sure?</h1>
                <p>The responses will not be saved</p>
                <div class="btn-data">
                    <button class="signup-btn" onClick={() => history(-1)}>No, go back</button>
                    <button class="login-btn" onClick={() => navigate('/profileguide')}>Yes, close assessment</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionnaireClose