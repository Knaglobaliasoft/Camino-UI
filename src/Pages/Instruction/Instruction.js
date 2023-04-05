import React from 'react';
import { useNavigate } from 'react-router-dom';
import TestHeader from '../../Components/TestHeader/TestHeader';
import './Instruction.scss';

const Instruction = () => {
    const navigate = useNavigate();
    return (
        <div className='new-patient intro-main'>
            <div className='bg-lights'>
                <TestHeader />
                <div className='setup-data'>
                    <h1>Instructions for Patients</h1>
                    <div className='intro-steps'>
                        <h2>Step 1</h2>
                        <p>Start by standing at the starting marker in front of the Camino device, without holding onto it</p>
                        <h2>Step 2</h2>
                        <p className='marker'>When told to begin, grab the handles of the Camino and walk at your normal
                            pace to the other marker</p>
                        <h2>Step 3</h2>
                        <p>Turn around</p>
                        <h2>Step 4</h2>
                        <p>Walk back to the starting marker at the fastest pace you feel comfortable with</p>
                    </div>
                    <div className='setup-btn'>
                        <button onClick={() => navigate('/test')}>Prepare to start test</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Instruction
