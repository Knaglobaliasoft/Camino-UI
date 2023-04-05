import React from 'react';
import { useNavigate } from 'react-router-dom';
import record from '../../Assets/Images/record-1.png';
import StartTest from '../../Components/StartTest/StartTest';
import TestHeader from '../../Components/TestHeader/TestHeader';
import './Test.scss';

const Test = () => {
    const navigate = useNavigate();
    return (
        <div className='new-patient ready-main'>
            <div className='bg-lights'>
                <TestHeader />
                <div>
                    <h1 className='heading'>Are you ready?</h1>
                    <div className='test-data' onClick={() => navigate('/recording')}>
                        <img src={record} alt='record' />
                        <p>Press to Begin Test</p>
                    </div>
                    <StartTest />
                </div>
            </div>
        </div>
    )
}

export default Test