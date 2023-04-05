import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import QuestionaireHeader from '../../Components/QuestionaireHeader/QuestionaireHeader'

const QuestionaireID = () => {
    const navigate = useNavigate();
    const [center, setCenter] = useState('')
    const [custom, setCustom] = useState('')

    return (
        <div className='new-patient questionaire-id'>
            <div className='bg-lights'>
                <QuestionaireHeader nav="/questionaire" />
                <div className='new-patient-data'>
                    <div className='form-main'>
                        <div className='form-data'>
                            <label>Wellness Center ID</label>
                            <input placeholder='Your Wellness Center ID' onChange={(e) => setCenter(e.target.value)} type='text' />
                        </div>
                        <div className='form-data'>
                            <label>Custom ID</label>
                            <input placeholder='Your Customer ID' onChange={(e) => setCustom(e.target.value)} type='text' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className={center !== '' && custom !== "" ? 'questionaire-btn start-btn' : 'questionaire-btn'} onClick={() => navigate('/question3')}>Start Questionnaire</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionaireID