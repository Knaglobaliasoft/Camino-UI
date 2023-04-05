import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { MdAddCircleOutline } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import logo from '../../Assets/Images/logo.png';
import message from '../../Assets/Images/Svg/message.svg';
import { PatientList } from '../Json/PatientList';
import './Dashboard.scss';

const Dashboard = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("default");
    const [val, setVal] = useState("")

    return (
        <div className='main-dashboard'>
            <div className='main-header'>
                <button className='close-btn' onClick={() => navigate('/welcome')}>Close Dashboard</button>
                <img src={logo} alt='logo' className='logo' />
                <button className='new-btn'>Download Report</button>
            </div>
            <div className='dashboard'>
                <div className='dashboard-data'>
                    <h1>Remote Monitoring Dashboard</h1>
                    <div className='monitoring'>
                        <div className='input-data'>
                            <input type='text' placeholder='Search Patients' />
                            <BiSearch />
                        </div>
                        <button className='filter-btn'>Filter</button>
                        <button className='message-btn' onClick={() => { setShow(true); setOpen("default") }}><img src={message} alt='message' />Message All </button>
                        <Modal show={show} onHide={() => setShow(false)} className='message-modal'>
                            {open === "default" &&
                                <>
                                    <div className='message'>
                                        <div className='modal-main'>
                                            <Modal.Header>
                                                <Modal.Title>Message </Modal.Title>
                                                <div className='input-data'>
                                                    <input type='text' placeholder='Search Patients' />
                                                    <BiSearch />
                                                </div>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div className='team-main'>
                                                    <h1>Team Cohorts (2)</h1>
                                                    <div className='members-main'>
                                                        <div className={`${val === "Team Parkinsons" && "set"} members-data`} onClick={() => setVal("Team Parkinsons")}>
                                                            {val === "Team Parkinsons" ? <BsCheckCircle className='check-icon' /> : <MdAddCircleOutline />}
                                                            <h2>Team Parkinsons <span>6 Members</span></h2>
                                                        </div>
                                                        <div className={`${val === "Team MS" && "set"} members-data`} onClick={() => setVal("Team MS")}>
                                                            {val === "Team MS" ? <BsCheckCircle className='check-icon' /> : <MdAddCircleOutline />}
                                                            <h2>Team MS<span>10 Members</span></h2>
                                                        </div>
                                                    </div>
                                                    <div className='cohorts'>
                                                        <h1>Patients  (45)</h1>
                                                        <h3>Select All</h3>
                                                    </div>
                                                    <div className='members-main add-cohorts'>
                                                        <div className='members-data member'>
                                                            <IoAddCircleOutline />
                                                            <h2>Andrew Smith</h2>
                                                        </div>
                                                        <div className='members-data member'>
                                                            <IoAddCircleOutline />
                                                            <h2>Andy Reeves</h2>
                                                        </div>
                                                        <div className='members-data member'>
                                                            <IoAddCircleOutline />
                                                            <h2>Andy Reeves</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                        </div>
                                        <div className='member-btn'>
                                            <button className='cancel-btn' onClick={() => setShow(false)}>Cancel</button>
                                            <button className='next-btn' onClick={() => setOpen("next")}>Next</button>
                                        </div>
                                    </div>
                                    <div className='cards' />
                                </>
                            }
                            {open === "next" &&
                                <>
                                    <div className='message'>
                                        <div className='modal-main'>
                                            <Modal.Header>
                                                <Modal.Title>Message </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div className='team-main'>
                                                    <div className='add-select'>
                                                        <button className='parkin'>{val}<AiOutlineCloseCircle /></button>
                                                        <button><AiOutlineCloseCircle /></button>
                                                    </div>
                                                    <div className='textarea-main'>
                                                        <textarea name="w3review" rows="4" cols="50" value='Start of a new week team, lets try and get 7 day streak on your exercises 🚀' />
                                                    </div>
                                                    <p className='quick'>Quick messages</p>
                                                    <div className='quick-msg'>
                                                        <div className='exercise'>Keep up to good work!</div>
                                                        <div className='exercise remain'>Remember your exercises 💪🏻</div>
                                                        <div className='exercise'>Start of a new week team, lets try and get 7 day streak on your exercises 🚀</div>
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                        </div>
                                        <div className='btn-main'>
                                            <div className='send-btn'>
                                                <button className='cancel-btn' onClick={() => setOpen("default")}>Back</button>
                                                <div className='btn-right'>
                                                    <button className='cancel-btn' onClick={() => setShow(false)}>Cancel</button>
                                                    <button className='next-btn' onClick={() => setShow(false)}>Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cards' />
                                </>
                            }
                        </Modal>
                    </div>
                </div>
                <h1 className='patients-head'>7 Patients</h1>
                {
                    PatientList.map((data, key) =>
                        <div className='patients-main' key={key}>
                            <div className='patients'>
                                <div className='patients-data'>
                                    <div className='howell' style={{ backgroundColor: data.bgColor }}>
                                        <div className='avtar'>
                                            <img src={data.img} alt='avtar1' />
                                            <div className='avtar-data' style={{ backgroundColor: data.avtarColor, borderColor: data.borderColor, color: data.color }}>{data.avtar}</div>
                                        </div>
                                        <div>
                                            <h1 style={{ color: data.headColor }}>{data.head}</h1>
                                            <p>{data.cohort} <span>{data.span}</span></p>
                                        </div>
                                    </div>
                                    <div className='num-step'>
                                        <span>{data.average}</span>
                                        <h3>{data.num}</h3>
                                        <div className='average'>
                                            <h1>{data.number}</h1>
                                            {data.icon1}
                                        </div>
                                    </div>
                                    <div className='num-step speed-step'>
                                        <span>{data.week}</span>
                                        <h3>{data.strainght}</h3>
                                        <div className='average'>
                                            <h1>{data.mph}</h1>
                                            {data.icon2}
                                        </div>
                                    </div>
                                    <div className='num-step'>
                                        <span>{data.balance}</span>
                                        <h3>{data.leg}</h3>
                                        <div className='stand'>
                                            {data.stand}
                                        </div>
                                    </div>
                                    <div className='num-step' style={{ border: (data.strength && data.sit && data.stadata) === null && "0" }}>
                                        <span>{data.strength}</span>
                                        <h3>{data.sit}</h3>
                                        <div className='stand'>
                                            {data.stadata}
                                        </div>
                                    </div>
                                    <div className='details'>
                                        <button className='message-btn border-0'>
                                            <img src={data.msg} alt='message' />
                                            {data.button}
                                        </button>
                                        <button className='detail-btn'>
                                            {data.detail}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Dashboard