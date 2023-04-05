import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiPlay } from 'react-icons/hi2';
import video from '../../Assets/Images/video.png';
import Tinetti from '../../Assets/Images/Tinetti.png'
import LeftVideo from '../../Assets/Images/left.mp4';
import RightVideo from '../../Assets/Images/right.mp4';
import LeftVideo2 from '../../Assets/Images/left2.mp4';
import RightVideo2 from '../../Assets/Images/right2.mp4';
import './TinettiDetail.scss';

const TinettiDetail = () => {
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
        <div className='tinetti-main'>
            <div className='tinetti-data'>
                <div className='main-header'>
                    <h1>Tinetti Gait</h1>
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
                            <img src={Tinetti} alt='Tinetti' />
                        </div>
                        <div className='score-main'>
                            <div className='tinetti'>
                                <div>T</div>
                                <p>Tinetti Score</p>
                            </div>
                            <div className='tinetti Camino'>
                                <div>C</div>
                                <p>Camino Results</p>
                            </div>
                        </div>
                    </div>
                    <div className='Initiation-table'>
                        <table className='w-100'>
                            <thead>
                                <th>Gait Initiation</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='tinetti'>
                                            <div>T</div>
                                            <p>Any hesitancy, multiple attempts to start =0; No hesitancy =1</p>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>
                                        <div className='chart-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr className='step-row'>
                                    <td>
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p>Time to first step</p>
                                        </div>
                                    </td>
                                    <td>5 Secs</td>
                                    <td>8 Secs</td>
                                    <td>
                                        <div className='chart-data2'>
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
                    <div className='Initiation-table'>
                        <table className='w-100'>
                            <thead>
                                <th>Step Length</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='tinetti'>
                                            <div>T</div>
                                            <p>L swing foot passes R =1</p>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td className='chart-main'>
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
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p>Step Length left</p>
                                        </div>
                                    </td>
                                    <td>60cm</td>
                                    <td>63cm</td>
                                    <td className='chart-main'>
                                        <div className='chart-data2'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti'>
                                            <div>T</div>
                                            <p>R swing foot passes L =1</p>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td className='chart-main'>
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
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p>Step Length left</p>
                                        </div>
                                    </td>
                                    <td>45cm</td>
                                    <td>48cm</td>
                                    <td className='chart-main'>
                                        <div className='chart-data2'>
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
                    <div className='Initiation-table'>
                        <table className='w-100'>
                            <thead>
                                <th>Foot Clearance</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='tinetti'>
                                            <div>T</div>
                                            <p>L foot completely clears floor =1</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td></td>
                                    <td>
                                        <div className='clearance-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p>Toe clearance, left foot</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td></td>
                                    <td>
                                        <div className='clearance-data up-down'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p>Heel clearance, left foot</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td></td>
                                    <td>
                                        <div className='clearance-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti'>
                                            <div>T</div>
                                            <p>R foot completely clears floor =1</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td></td>
                                    <td>
                                        <div className='clearance-data up-down'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p>Toe clearance, right foot</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td></td>
                                    <td>
                                        <div className='clearance-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p>Heel clearance, right foot</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td></td>
                                    <td>
                                        <div className='clearance-data up-down'>
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
                    <div className='Initiation-table'>
                        <table className='w-100'>
                            <thead>
                                <th>Step Symmetry</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='tinetti'>
                                            <div>T</div>
                                            <p>R and L step length unequal =0; R and L step length equal=1</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td></td>
                                    <td>
                                        <div className='clearance-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p className='stance-time'>Stance time asymmetry (left as % of right)</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>%</td>
                                    <td>
                                        <div className='clearance-data up-down'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p className='stance-time'>Swing time asymmetry (left as % of right)</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>%</td>
                                    <td>
                                        <div className='clearance-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p className='stance-time'>Step length asymmetry (left as % of right)</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>%</td>
                                    <td>
                                        <div className='clearance-data up-down'>
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
                    <div className='Initiation-table'>
                        <table className='w-100'>
                            <thead>
                                <th>Step Continuity</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='tinetti'>
                                            <div>T</div>
                                            <p>Stop/discontinuity between steps =0; Steps appear continuous =1</p>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>
                                        <div className='stance-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p>Number of stops during walk</p>
                                        </div>
                                    </td>
                                    <td>5 stops</td>
                                    <td>7 stops</td>
                                    <td>
                                        <div className='stance-data stance'>
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
                    <div className='Initiation-table'>
                        <table className='w-100'>
                            <thead>
                                <th>Path Excursion</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='tinetti'>
                                            <div>T</div>
                                            <p className='moderate'>Marked deviation =0; Mild /moderate deviation or use of aid =1; Straight without device=2</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>
                                        <div className='clearance-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p>Excursion from straight path</p>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>
                                        <div className='clearance-data up-down'>
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
                    <div className='Initiation-table'>
                        <table className='w-100'>
                            <thead>
                                <th>Trunk</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='tinetti'>
                                            <div>T</div>
                                            <p>Marked sway or uses device =0; No sway but knee or trunk flexion or spread arms while walking =1; None of the above deviations=2</p>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>
                                        <div className='stance-data'>
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
                    <div className='Initiation-table'>
                        <table className='w-100'>
                            <thead>
                                <th>Base of Support</th>
                                <th>Previous</th>
                                <th>Score</th>
                                <th>Trend</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='tinetti'>
                                            <div>T</div>
                                            <p className='moderate'>Heels apart =0; Heels close while walking =1</p>
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>
                                        <div className='stance-data'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart mark-chart' />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='tinetti step-one'>
                                            <div>C</div>
                                            <p>Step width median</p>
                                        </div>
                                    </td>
                                    <td>21</td>
                                    <td>22</td>
                                    <td>
                                        <div className='stance-data stance'>
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart' />
                                            <div className='chart mark-chart' />
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

export default TinettiDetail