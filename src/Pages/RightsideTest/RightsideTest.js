import React from 'react';
import { useNavigate } from 'react-router-dom';
import record from '../../Assets/Images/record-1.png';
import StartTest from '../../Components/StartTest/StartTest';
import TestHeader2 from '../../Components/TestHeader2/TestHeader2';

const RightsideTest = () => {
    const navigate = useNavigate();
    return (
        <div className='new-patient ready-main'>
            <div className='bg-lights'>
                <TestHeader2 />
                <div>
                    <h1 className='heading'>Right side test</h1>
                    <div className='test-data' onClick={() => navigate('/testrecording')}>
                        <img src={record} alt='record' />
                        <p>Press to Begin Test</p>
                    </div>
                    <StartTest />
                </div>
            </div>
        </div>
    )
}

export default RightsideTest