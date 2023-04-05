import React from 'react';
import { useNavigate } from 'react-router-dom';
import setup from '../../Assets/Images/setup.png';
import TestHeader from '../../Components/TestHeader2/TestHeader2';

const FigureSetup = () => {
    const navigate = useNavigate()
    return (
        <div className='new-patient setup-main'>
            <div className='bg-lights'>
                <TestHeader />
                <div className='setup-data'>
                    <h1>Set up</h1>
                    <div className='humaans set-up'>
                        <img src={setup} alt='setup-img' />
                    </div>
                    <p>Place cones 5 feet apart (152.4 cm). There should be at least 5 foot clearance around this area so that the participant can comfortably walk around them. DO NOT mark the start/stop position of the walking path between the cones.</p>
                    <div className='setup-btn'>
                        <button onClick={() => navigate('/figureinstruction')}>Instructions</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FigureSetup