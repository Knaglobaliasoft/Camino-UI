import React from 'react';
import { useNavigate } from 'react-router-dom';
import record2 from '../../Assets/Images/record-1.png';
import StartTest from '../../Components/StartTest/StartTest'

const LeftsideTest = () => {
    const navigate = useNavigate();
    return (
        <div className='new-patient ready-main'>
            <div className='bg-lights'>
                <div className='header'>
                    <h1>Figure 8 Test</h1>
                </div>
                <div>
                    <h1 className='heading'>Left side test</h1>
                    <div className='test-data' onClick={() => navigate('/recordtest')}>
                        <img src={record2} alt='record-1' />
                        <p>Press to Begin Test</p>
                    </div>
                    <StartTest />
                </div>
            </div>
        </div>
    )
}

export default LeftsideTest