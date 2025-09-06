import React from 'react'
import "./appDownload.css"
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better experience Download
            <br></br> 
            Tomato App
            <div className="app-download-platforms">
                <img src={assets.play_store} alt=''/>
                <img src={assets.app_store} alt='' />
            </div>
        </p>

        
   </div>
  )
}

export default AppDownload