import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';
import './ProfileGuide.scss';

const ViewReport = [
    {
        color: '#3d963e',
        new: 'New',
        date: '21 February 2023',
        btn: 'View Report'
    },
    {
        color: '#B3738F',
        new: 'Completed',
        date: '12 December 2022',
        btn: 'View Report'
    },
    {
        color: '#B3738F',
        new: 'Completed',
        date: '4 October 2022',
        btn: 'View Report'
    },
    {
        color: '#B3738F',
        new: 'Completed',
        date: '23 July 2022',
        btn: 'View Report'
    },
    {
        color: '#B3738F',
        new: 'Completed',
        date: '3 March 2022',
        btn: 'View Report'
    },
    {
        color: '#B3738F',
        new: 'Completed',
        date: '1 December 2021',
        btn: 'View Report'
    },
]

const ProfileGuide = () => {
    const navigate = useNavigate()
    return (
        <div className='patient-list'>
            <div className='main-header'>
                <button className='home-btn' onClick={() => navigate('/patientlist')}><BiChevronLeft />Patient List</button>
                <img src={logo} alt='logo' className='logo' />
                <button className='new-btn'>Edit Profile</button>
            </div>
            <div className='profile-guide'>
                <div className='new-profile'>
                    <h1>Jerry Howell</h1>
                    <p><span>Age:</span> 91 years <span>Gender:</span> Female</p>
                </div>
                <button onClick={() => navigate('/assessment')}>New Assessment</button>
            </div>
            <div>
                <div className='patient-card'>
                    {ViewReport.map((report, key) =>
                        <>
                            <div key={key} className='patient-data'>
                                <div className='patient-list'>
                                    <div className='list-data'>
                                        <span style={{ color: report.color }}>{report.new}</span>
                                        <h1>{report.date}</h1>
                                    </div>
                                    <div className='text-center'>
                                        <button onClick={() => navigate('/assessmentreport')}>{report.btn}</button>
                                    </div>
                                </div>
                                <div className='patients' />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfileGuide