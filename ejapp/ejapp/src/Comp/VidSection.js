import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VidSection.css';


function VidSection () {
    return (
        <div className='vid-container'>
            <video src="/public/videos/waterfalls.mp4" autoPlay loop muted/>
            <h1>COME ON EXPLORERS, ADVENTURE AWAITS</h1>
            <p>She can't wait all day...</p>
            <div className="vid-btns">
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize= 'btn--large'
                >
                START EXPLORING
                </Button> 

                <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize= 'btn--large'
                >
                WHAT YOU'RE MISSING <i className='far fa-play-circle'/>
                </Button>            
            </div>
        </div>
    )
}

export default VidSection;