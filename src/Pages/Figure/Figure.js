import React from 'react';
import { useNavigate } from 'react-router-dom';
import Humaaans from '../../Assets/Images/Humaaans-Space.png';

const Figure = () => {
    const navigate = useNavigate()
    return (
        <div className='new-patient tinetti-main'>
            <div className='bg-lights'>
                <div className='main-patient'>
                    <div>
                        <button className='patient-btn' onClick={() => navigate('/assessment')}>Close</button>
                    </div>
                </div>
                <div className='setup-data'>
                    <h1>Figure 8 </h1>
                    <div className='humaans'>
                        <img src={Humaaans} alt='Humaaans-Space' />
                    </div>
                    <p className='perfomed'>The participant is asked to walk in a Figure 8 pattern around two markers in both the left and right directions, using the Camino walker.<span>This test is performed twice, first in the right and then to the left direction.</span></p>
                    <div className='setup-btn'>
                        <button onClick={() => navigate('/figuresetup')}>Set Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Figure