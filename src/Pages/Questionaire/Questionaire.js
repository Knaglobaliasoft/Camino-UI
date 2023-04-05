import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';
import './Questionaire.scss';

const Questionaire = () => {
    const navigate = useNavigate()
    return (
        <div className='new-patient questionaire-main'>
            <div className='bg-lights'>
                <div className='main-patient'>
                    <div className='questionaire'>
                        <button className='patient-btn' onClick={() => navigate('/Questionnaireclose')}>Close</button>
                        <div className='logo'>
                            <img src={logo} alt='logo' />
                        </div>
                    </div>
                </div>
                <div className='questionaire-data'>
                    <h1>Camino Gait <br /> Assessment Protocol<br /> Questionnaire</h1>
                    <p>We would like to ask a few questions which will help us assess your gait and stability. Please complete the two questionnaires below.</p>
                    <div className='text-center'>
                        <button onClick={() => navigate('/questionaireid')}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questionaire