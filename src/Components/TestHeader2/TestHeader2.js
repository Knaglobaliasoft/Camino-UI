import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TestHeader2.scss';

const TestHeader2 = () => {
    const history = useNavigate();
    return (
        <>
            <div className=' text-header'>
                <button className='patient-btn' onClick={() => history(-1)}>Back</button>
                <div className='logo'>
                    <h1>Figure 8 Test</h1>
                </div>
            </div>
        </>
    )
}

export default TestHeader2