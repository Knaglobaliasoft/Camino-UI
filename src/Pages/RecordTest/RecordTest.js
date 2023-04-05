import React from 'react';
import { useNavigate } from 'react-router-dom';
import record2 from '../../Assets/Images/record-2.png';
import StartTest from '../../Components/StartTest/StartTest';

const RecordTest = () => {
    const navigate = useNavigate();
    return (
        <div className='new-patient ready-main'>
            <div className='bg-lights'>
                <div className=' text-header restart-test'>
                    <button className='patient-btn'>Restart Test</button>
                    <div className='logo'>
                        <h1>Figure 8 Test</h1>
                    </div>
                </div>
                <div>
                    <h1 className='record'>Recording...</h1>
                    <div className='test-data' onClick={() => navigate('/assessment')}>
                        <img src={record2} alt='record-2' />
                        <p>Press to Begin Test</p>
                    </div>
                    <StartTest />
                </div>
            </div>
        </div>
    )
}

export default RecordTest