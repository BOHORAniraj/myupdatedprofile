import React from 'react'
import './Cards.css'
import CardItem from './CardItems';

function Cards() {
    return (
        <>
        <section class="sec1">PROJECT</section> 
        <div className="cards">
            {/* <h1>These are some projects i have worked </h1> */}
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        
                         src='images/cal.png'
                        text="Prank Calculator"
                        label="click for description"
                        path="/services"/>

<CardItem 
                        
                        src='images/task.png'
                       text="Time Allocation"
                       label="Click for description"
                       path="/services"/>

<CardItem 
                        
                        src='images/profile.PNG'
                       text="My profile"
                       label="Click for description"
                       path="/services"/>




                    </ul>

                </div>
            </div>
        </div>
        </>
    )
}

export default Cards
