import React from 'react';
import { useNavigate } from 'react-router-dom';
import TestHeader from '../../Components/TestHeader2/TestHeader2';

const Instruction2 = () => {
    const navigate = useNavigate()
    return (
        <div className='new-patient intro-main'>
            <div className='bg-lights'>
                <TestHeader />
                <div className='setup-data'>
                    <h1>Instructions for Patients</h1>
                    <div className='intro-steps'>
                        <h2>Step 1</h2>
                        <p>Stand between the two cones, such that one cone is on your left and the other is on your right. You should not be facing either of the cones. The Camino walker will be in front of you, and you may hold onto it if you wish.</p>
                        <h2>Step 2</h2>
                        <p className='marker'>When instructed to do so, walk at your usual pace around the cones in a pattern that resembles the </p>
                        <h2>Step 3</h2>
                        <p>Stop when you have walked around both cones and have returned to your starting point.</p>
                        <h2>Step 4</h2>
                        <p>1. In the first test you will begin by walking around the cone that is to your right
                            <span style={{ display: 'block' }}>2. In the second test, you will asked to begin you walking to the left</span></p>
                    </div>
                    <div className='setup-btn'>
                        <button onClick={() => navigate('/rightsidetest')}>Prepare to start test</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Instruction2