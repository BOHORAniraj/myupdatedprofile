import React from 'react'
import { Button } from '../button/Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="../videos/video-2.mp4" autoPlay loop muted />
            <h1>HELLO,</h1>
            <p>My Name Is Niraj Bohora</p>
            <p>I am a Software Engineer And I am Learning CODING in DENTED CODE</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--primary"
                buttonSize = "btn--large" ></Button>
            </div>
            
        </div>
    )
}

export default HeroSection;
