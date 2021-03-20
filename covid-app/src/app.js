import React from 'react'
import Main from './main'
import BackgroundVideo from './video'
import './main.css'
function App(){
    return(
        <div className='main'>
        <BackgroundVideo />
        <Main/>
        </div>
    )
}

export default App