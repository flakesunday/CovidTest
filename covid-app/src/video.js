import React from 'react'
import backgroundVideo from './backgroundVideo.mp4'

const BackgroundVideo = () => {
    const background = backgroundVideo
    return(
        <div >
            <video autoPlay loop muted className='background-video' >
                <source src={background} type ='video/mp4' />
            </video>
        </div>
    )

}

export default BackgroundVideo