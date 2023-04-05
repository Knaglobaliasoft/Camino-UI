import React from 'react';
import { useNavigate } from 'react-router-dom';
import record2 from '../../Assets/Images/record-2.png';
import StartTest from '../../Components/StartTest/StartTest';
import './Recording.scss';

const Recording = () => {
    const navigate = useNavigate();
    return (
        <div className='new-patient ready-main'>
            <div className='bg-lights'>
                <div className='text-header restart-test'>
                    <button className='patient-btn'>Restart Test</button>
                    <div className='logo'>
                        <h1>Tinetti Gait Test</h1>
                    </div>
                </div>
                <div>
                    <h1 className='record'>Recording...</h1>
                    <div className='test-data' onClick={() => { navigate("/assessment?complited=true") }}>
                        <img src={record2} alt='record-2' />
                        <p>Press to Begin Test</p>
                    </div>
                    <StartTest />
                </div>
            </div>
        </div>
    )
}

export default Recording