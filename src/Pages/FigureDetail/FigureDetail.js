import React, { useRef, useState } from 'react';
import { HiPlay } from 'react-icons/hi2';
import video from '../../Assets/Images/video.png';
import LeftVideo from '../../Assets/Images/left.mp4';
import RightVideo from '../../Assets/Images/right.mp4';
import LeftVideo2 from '../../Assets/Images/left2.mp4';
import RightVideo2 from '../../Assets/Images/right2.mp4';
import './FigureDetail.scss';
import { useNavigate } from 'react-router-dom';

const FigureDetail = () => {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlayingRight, setIsPlayingRight] = useState(false);
    const [isPlayingLeft, setIsPlayingLeft] = useState(false);
    const [isPlayingRight2, setIsPlayingRight2] = useState(false);
    const videoRef = useRef(false);
    const videoRefRight = useRef(false);
    const videoRefLeft = useRef(false);
    const videoRefRight2 = useRef(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        setIsPlayingRight(!isPlayingRight)
        setIsPlayingLeft(!isPlayingLeft)
        setIsPlayingRight2(!isPlayingRight2)
        if (isPlaying && isPlayingRight) {
            videoRef.current.pause();
            videoRefRight.current.pause()
            videoRefLeft.current.pause()
            videoRefRight2.current.pause()
        } else {
            videoRef.current.play();
            videoRefRight.current.play()
            videoRefLeft.current.play()
            videoRefRight2.current.play()
        }
    }
    const togglePlayLeft = () => {
        setIsPlaying(!isPlaying);
        setIsPlayingRight(!isPlayingRight)
        setIsPlayingLeft(!isPlayingLeft)
        setIsPlayingRight2(!isPlayingRight2)
        if (isPlaying && isPlayingRight) {
            videoRef.current.pause();
            videoRefRight.current.pause()
            videoRefLeft.current.pause()
            videoRefRight2.current.pause()
        } else {
            videoRef.current.play();
            videoRefRight.current.play()
            videoRefLeft.current.play()
            videoRefRight2.current.play()
        }
    }
    const togglePlayRight = () => {
        setIsPlaying(!isPlaying);
        setIsPlayingRight(!isPlayingRight)
        setIsPlayingLeft(!isPlayingLeft)
        setIsPlayingRight2(!isPlayingRight2)
        if (isPlaying && isPlayingRight) {
            videoRef.current.pause();
            videoRefRight.current.pause()
            videoRefLeft.current.pause()
            videoRefRight2.current.pause()
        } else {
            videoRef.current.play();
            videoRefRight.current.play()
            videoRefLeft.current.play()
            videoRefRight2.current.play()
        }
    }
    const togglePlayLeft1 = () => {
        setIsPlaying(!isPlaying);
        setIsPlayingRight(!isPlayingRight)
        setIsPlayingLeft(!isPlayingLeft)
        setIsPlayingRight2(!isPlayingRight2)
        if (isPlaying && isPlayingRight) {
            videoRef.current.pause();
            videoRefRight.current.pause()
            videoRefLeft.current.pause()
            videoRefRight2.current.pause()
        } else {
            videoRef.current.play();
            videoRefRight.current.play()
            videoRefLeft.current.play()
            videoRefRight2.current.play()
        }
    }
    return (
        <div className='tinetti-main figure-detail'>
            <div className='tinetti-data'>
                <div className='main-header'>
                    <h1>Figure 8</h1>
                    <button className='close-btn' onClick={() => navigate('/assessmentreport')}>Close</button>
                </div>
                <div className='tinetti-body'>
                    <div className='video-data'>
                        <h1>Video</h1>
                        <div className='previous-data'>
                            <div className='text-main left-line'>
                                <p>Previous Test: <span>12th December 2022</span></p>
                                <div className='left-side'>
                                    <div className={`video-main ${isPlaying && "rmv-after"}`}>
                                        {isPlaying === false && <img src={video} alt='video' />}
                                        <div style={{ display: `${isPlaying ? "block" : "none"}`, height: "100%" }}>
                                            <video src={LeftVideo} ref={videoRef} controls></video>
                                        </div>
                                        {isPlaying === false &&
                                            <>
                                                <div onClick={() => togglePlay()}>
                                                    <HiPlay />
                                                </div>
                                                <button>Left Side</button>
                                            </>
                                        }
                                    </div>
                                    <div className={`video-main ${isPlayingRight && "rmv-after"}`}>
                                        {isPlayingRight === false && <img src={video} alt='video' />}
                                        <div style={{ display: `${isPlayingRight ? "block" : "none"}`, height: "100%" }}>
                                            <video src={RightVideo} ref={videoRefRight} controls></video>
                                        </div>
                                        {isPlayingRight === false &&
                                            <>
                                                <div onClick={togglePlayLeft}>
                                                    <HiPlay />
                                                </div>
                                                <button>Right Side</button>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='text-main previous-test'>
                                <p>This Test: <span>12th December 2022</span></p>
                                <div className='left-side'>
                                    <div className={`video-main ${isPlayingLeft && "rmv-after"}`}>
                                        {isPlayingLeft === false && <img src={video} alt='video' />}
                                        <div style={{ display: `${isPlayingLeft ? "block" : "none"}`, height: "100%" }}>
                                            <video src={LeftVideo2} ref={videoRefLeft} controls></video>
                                        </div>
                                        {isPlayingLeft === false &&
                                            <>
                                                <div onClick={togglePlayLeft1}>
                                                    <HiPlay />
                                                </div>
                                                <button>Left Side</button>
                                            </>
                                        }
                                    </div>
                                    <div className={`video-main ${isPlayingRight2 && "rmv-after"}`}>
                                        {isPlayingRight2 === false && <img src={video} alt='video' />}
                                        <div style={{ display: `${isPlayingRight2 ? "block" : "none"}`, height: "100%" }}>
                                            <video src={RightVideo2} ref={videoRefRight2} controls></video>
                                        </div>
                                        {isPlayingRight2 === false &&
                                            <>
                                                <div onClick={togglePlayRight}>
                                                    <HiPlay />
                                                </div>
                                                <button>Right Side</button>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='result-main'>
                        <div className='metrics'>
                            <h1>Metrics</h1>
                        </div>
                    </div>
                    <div className='Initiation-table symmetric'>
                        <table className='w-100'>
                            <thead>
                                <th>Time to completion</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className='comple'>Time to completion</p>
                                    </td>
                                    <td>23 secs</td>
                                    <td>26 secs</td>
                                    <td className='chart-main'>
                                        <div className='chart-data2'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart chart2' />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='Initiation-table symmetric'>
                        <table className='w-100'>
                            <thead>
                                <th>Number of steps</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className='comple'>Number of steps</p>
                                    </td>
                                    <td>15</td>
                                    <td>16</td>
                                    <td className='chart-main chart-main2'>
                                        <div className='chart-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='Initiation-table symmetric'>
                        <table className='w-100'>
                            <thead>
                                <th>Symmetricity</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Measures the accuracy of the figure 8 shape</p>
                                    </td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td className='chart-main chart-main2'>
                                        <div className='chart-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='Initiation-table symmetric'>
                        <table className='w-100'>
                            <thead>
                                <th>Straight walking speed</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Speed of the straight segments</p>
                                    </td>
                                    <td>2.2 mph</td>
                                    <td>2.2 mph</td>
                                    <td className='chart-main segment'>
                                        <div className='chart-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='Initiation-table symmetric'>
                        <table className='w-100'>
                            <thead>
                                <th>Turning speed</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Turning speed</p>
                                    </td>
                                    <td>1.9 mph</td>
                                    <td>2.1 mph</td>
                                    <td className='chart-main segment'>
                                        <div className='chart-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Left turning speed</p>
                                    </td>
                                    <td>1.9 mph</td>
                                    <td>2.1 mph</td>
                                    <td className='chart-main segment'>
                                        <div className='chart-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FigureDetail