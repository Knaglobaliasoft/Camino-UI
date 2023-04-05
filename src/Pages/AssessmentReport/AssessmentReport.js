import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';
import { HiOutlineArrowSmDown } from 'react-icons/hi';
import Tinetti from '../../Assets/Images/Tinetti.png';
import chart1 from '../../Assets/Images/chart1.png';
import chart2 from '../../Assets/Images/chart2.png';
import './AssessmentReport.scss';

const AssessmentReport = () => {
    const navigate = useNavigate()
    return (
        <div className='assessment-main'>
            <div className='report-main'>
                <div className='profile-assessment'>
                    <button className='home-btn' onClick={() => navigate('/profileguide')}><BiChevronLeft />Profile</button>
                    <button className='report-btn'>Report: 12 January 2023</button>
                </div>
                <div className='profile-guide'>
                    <div className='new-profile'>
                        <h1>Jerry Howell</h1>
                        <p><span>Age:</span> 91 years <span>Gender:</span> Female</p>
                    </div>
                    <div className='details'>
                        <p>Session Details</p>
                        <div className='venue-data'>
                            <p>Date:<span> 9th February 2023</span></p>
                            <p>Time: <span>920 MST</span></p>
                            <p>Venue: <span>Health Care Clinic</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='patient-card'>
                <div className='patient-data'>
                    <div className='patient-list'>
                        <div className='report-data'>
                            <div className='list-data'>
                                <h1>Tinetti Gait</h1>
                                <img src={Tinetti} alt='remote' />
                            </div>
                            <div className='session-main'>
                                <div className='session-data'>
                                    <div className='sess-main'>
                                        <h1>11/<span>12</span></h1>
                                        <HiOutlineArrowSmDown />
                                    </div>
                                    <p>Last session: <span>10/12</span></p>
                                </div>
                                <div className='report-chart'>
                                    <img src={chart1} alt='chart1' />
                                    <p>Trend</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center report-view'>
                            <button onClick={() => navigate('/tinettidetail')}>View Report</button>
                        </div>
                    </div>
                    <div className='patients' />
                </div>
                <div className='patient-data'>
                    <div className='patient-list'>
                        <div className='report-data'>
                            <div className='list-data'>
                                <h1>Straight Line Speed</h1>
                            </div>
                            <div className='session-main'>
                                <div className='session-data'>
                                    <div className='sess-main'>
                                        <h1 className='mph-data'>1.6<span>mph</span></h1>
                                        <HiOutlineArrowSmDown />
                                    </div>
                                </div>
                                <img src={chart2} alt='chart2' />
                            </div>
                            <p>You walk faster than <b> 46% </b>of walking aid users</p>
                        </div>
                        <div className='text-center report-view'>
                            <button>View Report</button>
                        </div>
                    </div>
                    <div className='patients' />
                </div>
                <div className='patient-data'>
                    <div className='patient-list'>
                        <div className='report-data'>
                            <div className='list-data'>
                                <h1>Tinetti Balance</h1>
                            </div>
                            <div className='session-main'>
                                <div className='session-data'>
                                    <div className='sess-main'>
                                        <h1>12/<span>16</span></h1>
                                        <HiOutlineArrowSmDown />
                                    </div>
                                    <p>Last session: <span>12/16</span></p>
                                </div>
                                <div className='report-chart'>
                                    <img src={chart1} alt='chart1' />
                                    <p>Trend</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center report-view'>
                            <button>View Report</button>
                        </div>
                    </div>
                    <div className='patients' />
                </div>
                <div className='patient-data'>
                    <div className='patient-list'>
                        <div className='report-data'>
                            <div className='list-data'>
                                <h1>Figure 8</h1>
                            </div>
                            <div className='session-main'>
                                <div className='session-data'>
                                    <div className='sess-main'>
                                        <h1 className='mph-data'>21<span>secs</span></h1>
                                        <HiOutlineArrowSmDown className='down-arrow' />
                                    </div>
                                    <p>Last session: <span>22 secs</span></p>
                                </div>
                                <div className='session-data'>
                                    <div className='sess-main'>
                                        <h1 className='mph-data'>18</h1>
                                        <HiOutlineArrowSmDown className='down-arrow' />
                                    </div>
                                    <p>Last session: <span>19</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center report-view'>
                            <button onClick={() => navigate('/figuredetail')}>View Report</button>
                        </div>
                    </div>
                    <div className='patients' />
                </div>
            </div>
        </div>
    )
}

export default AssessmentReport