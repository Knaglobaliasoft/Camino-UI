import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../Assets/Images/logo2.png';
import avtar1 from '../../Assets/Images/avtar1.png';
import remote from '../../Assets/Images/remote.png';
import avtar8 from '../../Assets/Images/avtar8.png';
import avtar9 from '../../Assets/Images/avtar9.png';
import './Welcome.scss';

const Welcome = () => {
    const navigate = useNavigate()

    return (
        <div className='welcome-main'>
            <div className='welcome-data'>
                <div className='main-patient'>
                    <div className='logo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <button className='new-btn border-0' onClick={() => navigate('/')}>Log Out</button>
                </div>
                <h1>Welcome back Sarah</h1>
            </div>
            <div className='patient-card'>
                <div className='patient-data'>
                    <div className='patient-list'>
                        <div className='list-data'>
                            <div className='avtar'>
                                <img src={avtar1} alt='avtar1' />
                                <img src={avtar9} alt='avtar9' />
                                <img src={avtar8} alt='avtar8' />
                            </div>
                            <h1>Patient List</h1>
                        </div>
                        <div className='text-center'>
                            <button onClick={() => navigate('/patientlist')}>View Patients</button>
                        </div>
                    </div>
                    <div className='patients' />
                </div>
                <div className='patient-data dashboard'>
                    <div className='patient-list'>
                        <div className='list-data'>
                            <div className='avtar'>
                                <img src={remote} alt='remote' />
                            </div>
                            <h1>Remote Monitoring Dashboard</h1>
                        </div>
                        <div className='text-center'>
                            <button onClick={() => navigate('/dashboard')}>Open Live Dashboard</button>
                        </div>
                    </div>
                    <div className='patients' />
                </div>
            </div>
        </div>
    )
}

export default Welcome