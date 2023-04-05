import React from 'react';
import { useNavigate } from 'react-router-dom';
import Humaaans from '../../Assets/Images/Humaaans-Space.png';
import './TinettiGait.scss';

const TinettiGait = () => {
    const navigate = useNavigate()
    return (
        <div className='new-patient tinetti-main'>
            <div className='bg-lights'>
                <div className='main-patient'>
                    <div>
                        <button className='patient-btn' onClick={() => navigate('/assessment')}>Close</button>
                    </div>
                </div>
                <div className='setup-data'>
                    <h1>Tinetti Gait </h1>
                    <div className='humaans'>
                        <img src={Humaaans} alt='Humaaans-Space' />
                    </div>
                    <p>The participant is asked to walk in a straight line for 20 feet (6 metres), e.g. down a hallway, or across a room.</p>
                    <div className='setup-btn'>
                        <button onClick={() => navigate('/setup')}>Set Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TinettiGait