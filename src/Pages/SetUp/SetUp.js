import React from 'react';
import { useNavigate } from 'react-router-dom';
import setupimg from '../../Assets/Images/setup-img.png';
import TestHeader from '../../Components/TestHeader/TestHeader';
import './SetUp.scss';

const SetUp = () => {
    const navigate = useNavigate();
    return (
        <div className='new-patient setup-main'>
            <div className='bg-lights'>
                <TestHeader />
                <div className='setup-data'>
                    <h1>Set up</h1>
                    <div className='humaans'>
                        <img src={setupimg} alt='setup-img' />
                    </div>
                    <p>Two markers on the floor in a room/hallway at 0 and 20 feet. If in a hallway, it should be wide enough for the participant to comfortably turn around with a walker.</p>
                    <div className='setup-btn'>
                        <button onClick={() => navigate('/instruction')}>Instructions</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetUp