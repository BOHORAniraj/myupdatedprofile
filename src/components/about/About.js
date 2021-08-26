import React from 'react'
import './About.css'
import user from './user.jpg'

function About() {
    return (
        <div>
            <section class="sec1">ABOUT ME</section>
            <div className="img4">
        <section id="about">
            <div className="container">
                    <div className="pro-task-list">
                    <div className="pro-img">
                        <img src={user} alt="" />
                    </div>
    
                    <div className="info">
                        "I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive toward. I'm not comfortable with settling, and I'm always looking for an opportunity to do better and achieve greatness."                   </div>
                </div>
            </div>
        </section>
    
     </div>
            
        </div>
    )
}

export default About
