import React from 'react';
import { useNavigate } from 'react-router-dom';
import Humaaans_img from '../../Assets/Images/Humaaans.png';
import './ReviewAssessment.scss';

const ReviewAssessment = () => {
    const navigate = useNavigate();
    return (
        <div className='new-patient questionaire-close'>
            <div className='bg-lights'>
                <h1>Review Assessment</h1>
                <p>Is the assessment complete?</p>
                <div className='tinetti-gait'>
                    <div className='add_data'>
                        <div className='add_image'>
                            <img src={Humaaans_img} alt="" />
                            <h4>Tinetti Gait</h4>
                        </div>
                        <button className='start_theme'>Completed</button>
                    </div>
                    <div className='add_data'>
                        <div className='add_image'>
                            <img src={Humaaans_img} alt="" />
                            <h4>Figure 8</h4>
                        </div>
                        <button className='start_theme'>Completed</button>
                    </div>
                </div>
                <div class="btn-data">
                    <button class="signup-btn" onClick={() => navigate('/assessment')}>No yet, go back</button>
                    <button class="login-btn" onClick={() => navigate('/profileguide')} >Yes, generate report</button>
                </div>
            </div>
        </div>
    )
}

export default ReviewAssessment