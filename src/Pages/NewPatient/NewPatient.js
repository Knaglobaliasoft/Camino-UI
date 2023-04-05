import React from 'react';
import logo from '../../Assets/Images/logo.png';
import { BiChevronDown } from 'react-icons/bi';
import './NewPatient.scss';
import { useNavigate } from 'react-router-dom';

const NewPatient = () => {
    const navigate = useNavigate()
    return (
        <div className='new-patient'>
            <div className='bg-lights'>
                <div className='main-patient'>
                    <div>
                        <button className='patient-btn' onClick={() => navigate('/patientlist')}>Close</button>
                        <div className='logo'>
                            <img src={logo} alt='logo' />
                        </div>
                    </div>
                </div>
                <div className='new-patient-data'>
                    <h1>Add New Patient</h1>
                    <div className='form-main'>
                        <div className='form-data'>
                            <label>Wellness Center ID</label>
                            <input placeholder='Your Wellness Center ID' type='text' />
                        </div>
                        <div className='form-data'>
                            <label>Custom ID</label>
                            <input placeholder='Your Customer ID' type='text' />
                        </div>
                        <div className='form-data'>
                            <label>First Name</label>
                            <input placeholder='Your First Name ' type='text' />
                        </div>
                        <div className='form-data'>
                            <label>Last Name</label>
                            <input placeholder='Your Last Name ' type='text' />
                        </div>
                        <div className='select-data'>
                            <select className='form-data'>
                                <option selected>Age</option>
                                <option value='1'>20</option>
                                <option value='2'>30</option>
                                <option value='3'>40</option>
                            </select>
                            <BiChevronDown />
                        </div>
                        <div className='select-data'>
                            <select className='form-data'>
                                <option selected>Gender</option>
                                <option value='1'>Male</option>
                                <option value='2'>Female</option>
                                <option value='3'>Other</option>
                            </select>
                            <BiChevronDown />
                        </div>
                        <div className='text-center'>
                            <button className='new-btn border-0'>Add Patient</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPatient