import React, { useState, useEffect } from 'react';
import './Assessment.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import Humaaans_img from '../../Assets/Images/Humaaans.png';

const Assessment = () => {
    const { state } = useLocation()
    const [newTest, setNewTest] = useState('')
    const [isComplete, setIsComplete] = useState(false)
    const navigate = useNavigate()
    function handleRemoveBtn(id) {
        let updateState = [...state]
        updateState = updateState.filter((e) => {
            if (e.id === id) {
                e.selectable = false
                e.select = "Select"
            }
            return e
        })

        setNewTest(updateState)
        sessionStorage.setItem("test", JSON.stringify(updateState))
    }

    const handleSteps = () => {
        const isCompleted = window.location.search.replace("?complited=", "")
        setIsComplete(isCompleted)

        const testData = JSON.parse(localStorage.getItem('test'))
        setNewTest(testData)
    }

    const startSteps = (value) => {
        navigate(value.onclick)
        const newData = newTest.map((val) => {
            if (val.id === value.id) {
                val.steps = "complete"
            }
            return val
        })
        localStorage.setItem("test", JSON.stringify(newData))
    }

    useEffect(() => {
        handleSteps()
    }, [])

    return (
        <>
            <div className='assessment_main'>
                <div className='close_btn'>
                    <button onClick={() => navigate('/closeassessment')}>Close Assessment</button>
                </div>
                <div className='Assessment_content'>
                    <div className='title'>
                        <h2>Assessment</h2>
                        <p>To take an assessment please complete one or both of the following seps Tinetti Gait Test</p>
                    </div>
                </div>
                <div className='assessment_card'>
                    <div style={{ position: "relative" }}>
                        <div className='card_theme'>
                            <div className='card_parts'>
                                <div className='card_content'>
                                    <h4>Complete a Questionnaire</h4>
                                    <p>Questions to help assess your gait and stability</p>
                                </div>
                                {isComplete
                                    ? <div className='complate-btn Assessment_btn_theme'>
                                        <button onClick={() => navigate('/questionaire')}>Completed</button>
                                    </div>
                                    :
                                    <div className='Assessment_btn_theme'>
                                        <button onClick={() => navigate('/questionaire')}>Start</button>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='patients'></div>
                    </div>
                    <div style={{ position: "relative" }}>
                        <div className='card_theme'>
                            <div className='card_parts'>
                                <div className='card_content'>
                                    <h4>Run a Test</h4>
                                    <p>Choose one or more tests to complete as part of assessment</p>
                                </div>
                                <div className='Assessment_btn_theme'>
                                    {newTest && newTest.length !== 0 ?
                                        <button className='anothet-test' onClick={() => navigate('/ChooseTests', { state: newTest })}>Add another Test</button>
                                        : <button onClick={() => navigate('/ChooseTests', { state: newTest })}>Select Test</button>
                                    }
                                </div>

                            </div>
                            <div className='start-test'>
                                {newTest && newTest.map((val, key) => <>
                                    {val.selectable === true &&
                                        <div id={key} className='add_data' key={key}>
                                            <div className='add_image'>
                                                <img src={Humaaans_img} alt="" />
                                                <h4>{val.name}</h4>
                                            </div>
                                            <div className='add_btn'>
                                                {val.steps === "complete"
                                                    ? <button id={key} className='start_theme complate'>Completed</button>
                                                    :
                                                    <button id={key} className='start_theme' onClick={() => startSteps(val)}>Start Test</button>
                                                }
                                                <button id={key} onClick={() => handleRemoveBtn(val.id)} className='remove_theme'>Remove</button>
                                            </div>
                                        </div>
                                    }
                                </>)}
                            </div>
                        </div>
                        <div className='patients'></div>
                    </div>

                    <div style={{ position: "relative" }}>
                        <div className='card_theme'>
                            <div className='card_parts'>
                                <div className='card_content'>
                                    <h4>Complete Assessment</h4>
                                    <p>Review before you complete assessment</p>
                                </div>
                                <div className='Assessment_btn_theme'>
                                    <button className='review-btn' onClick={() => navigate('/reviewassessment')}>Review</button>
                                </div>
                            </div>
                        </div>
                        <div className='patients'></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Assessment