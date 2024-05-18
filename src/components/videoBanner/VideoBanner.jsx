import { useEffect, useRef, useState } from 'react'
import hero_video1 from '../../assets/video/hero_video1.mp4'
import hero_video2 from '../../assets/video/hero_video2.mp4'
import './videoBanner.css'

const VideoBanner = ()=>{

    const [muteButton,setMuteButton] = useState(true)
    const videoRef = useRef()
    useEffect(()=>{

        if(muteButton){ 
            videoRef.current.muted = true
        }else
        {
            videoRef.current.muted = false
        }

    },[muteButton])

    return(
        <div className="hero-video">
            <video ref={videoRef} className='hero-banner-video' loop autoPlay muted src={hero_video1}></video>
            <h1 className="hero-text-video1">Digital Marks the <br /> Future and We <br /> Build it</h1>
            <p className="hero-text-works">View all Works <i className="fa-solid fa-arrow-right"></i></p>
            <div onClick={()=>setMuteButton(!muteButton)} className="mute-button">
                {muteButton? <i className="fa-solid fa-volume-xmark"></i> : <i className="fa-solid fa-volume-off"></i>}
            </div>
        </div>
    )
}

export default VideoBanner