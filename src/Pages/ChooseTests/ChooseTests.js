import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import test_img from '../../Assets/Images/test.png'
import './ChooseTests.scss';

const selected = [
    {
        id: 1,
        img: test_img,
        name: 'Tinetti Gait',
        des: 'Some quick introduction copy',
        select: 'Select',
        selectable: false,
        steps: 'pending',
        onclick: '/tinettigait'
    },
    {
        id: 2,
        img: test_img,
        name: 'Tinetti Balance',
        des: 'Some quick introduction copy',
        select: 'Select',
        selectable: false,
        steps: 'pending',
        onclick: '/tinettigait'
    },
    {
        id: 3,
        img: test_img,
        name: 'Figure 8',
        des: 'Some quick introduction copy',
        select: 'Select',
        selectable: false,
        steps: 'pending',
        onclick: '/figure'
    },
    {
        id: 4,
        img: test_img,
        name: '24 Hour Monitor',
        des: 'Some quick introduction copy',
        select: 'Select',
        selectable: false,
        steps: 'pending',
        onclick: '/tinettigait'
    }
]

const ChooseTests = () => {
    const [isActive] = useState(false);
    const { state } = useLocation()
    const navigate = useNavigate()

    const [data, setData] = useState(selected)
    const [dark, setDark] = useState(false)

    const handleClick = (id) => {
        const updateState = [...data]

        if (true) {
            updateState[id].selectable = !updateState[id].selectable
            if (updateState[id].selectable) {
                updateState[id].select = "Selected"
                updateState[id].steps = "pending"
            } else {
                updateState[id].select = "Select"
            }
            setData(updateState)
        }
    }

    const navigatePage = () => {

        const datas = data.map((val) => {
            if (val.selectable) {
                val.select = "Added"
            }
            return val
        })
        navigate('/assessment', { state: datas })
        localStorage.setItem("test", JSON.stringify(datas))
    }

    const func = () => {
        if (state.length) {
            setData(state)
        }
        const check = data.find((val) => val.selectable === true)
        if (check) {
            setDark(true)
        } else {
            setDark(false)
        }
    }

    useEffect(() => {
        func()
    }, [state, data])

    return (
        <div className='ChooseTests_main'>
            <div className='header'>
                <h4>Choose Tests</h4>
                <div>
                    {dark ? <button className='add_assessment' onClick={navigatePage}>Add to Assessment</button> : <button className='test_btn_theme' onClick={() => navigate('/assessment')}>Close</button>}
                </div>
            </div>
            <div className='test_cards'>
                {data && data.map((e, key) =>
                    <>
                        <div key={key} className={isActive ? 'test_card_theme test_card_active' : ' test_card_theme'}>
                            <div className='test_content'>
                                <div className='test_left'>
                                    <div>
                                        <img src={e.img} alt="" />
                                    </div>
                                    <div>
                                        <h4>{e.name}</h4>
                                        <p>{e.des}</p>
                                    </div>
                                </div>
                                <div className='select_btn'>
                                    <button id={key} className={e.select === "Selected" || e.select === "Added" ? 'test_btn_active' : 'test_btn_theme'} onClick={() => { handleClick(key) }}>{e.select}</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ChooseTests