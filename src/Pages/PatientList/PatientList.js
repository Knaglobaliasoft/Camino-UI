import React from 'react';
import { useNavigate } from 'react-router-dom';
import avtar1 from '../../Assets/Images/avtar1.png';
import avtar2 from '../../Assets/Images/avtar2.png';
import avtar3 from '../../Assets/Images/avtar3.png';
import avtar4 from '../../Assets/Images/avtar4.png';
import avtar5 from '../../Assets/Images/avtar5.png';
import avtar6 from '../../Assets/Images/avtar6.png';
import avtar7 from '../../Assets/Images/avtar7.png';
import search from '../../Assets/Images/Svg/search.svg';
import Header from '../../Components/Header/Header';
import './PatientList.scss';

const patient = [
    {
        img: avtar1,
        heading: 'Jerry Howell',
        profile: 'Open Profile'
    },
    {
        img: avtar2,
        heading: 'David Martin',
        profile: 'Open Profile'
    },
    {
        img: avtar3,
        heading: 'Gill Waites',
        profile: 'Open Profile'
    },
    {
        img: avtar4,
        heading: 'Tom Haskall',
        profile: 'Open Profile'
    },
    {
        img: avtar5,
        heading: 'Wendy Smith',
        profile: 'Open Profile'
    },
    {
        img: avtar6,
        heading: 'Steven Walker',
        profile: 'Open Profile'
    },
    {
        img: avtar7,
        heading: 'Sarah Maden',
        profile: 'Open Profile'
    },

]

const PatientList = () => {
    const navigate = useNavigate()
    return (
        <div className='patient-main'>
            <Header />
            <div className='patient-list'>
                <div className='patient-head'>
                    <h1>Patient List</h1>
                    <div className='search-data'>
                        <img src={search} alt='search' />
                        <input placeholder='Search Patients' />
                    </div>
                </div>
                <div className='main-data'>
                    {patient.map((data, key) =>
                        <div className='patient-profile' key={key}>
                            <div className='patient-data'>
                                <img src={data.img} alt='avtar1' />
                                <h1>{data.heading}</h1>
                            </div>
                            <button onClick={() => navigate('/profileguide')}>{data.profile}</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PatientList