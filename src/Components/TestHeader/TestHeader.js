import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TestHeader.scss';

const TestHeader = () => {
    const history = useNavigate();
    return (
        <>
            <div className=' text-header'>
                <button className='patient-btn' onClick={() => history(-1)}>Back</button>
                <div className='logo'>
                    <h1>Tinetti Gait Test</h1>
                </div>
            </div>
        </>
    )
}

export default TestHeader