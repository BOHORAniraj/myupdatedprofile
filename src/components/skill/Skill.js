import React from 'react'
import './Skill.css'
// import back1 from "./back1.jpeg";

function Skill() {
    return (
        <div>
            <section class="sec1">SKILLS</section> 
            <section className="skills">
                <div className="skills-list">
                    <div className="html"><i class="fab fa-html5" ></i> HTML

                    </div><hr/>
                    <div className="css">
						<i class="fab fa-css3-alt" ></i> CSS
					</div><hr/>
                    <div className="js">
						<i class="fab fa-js-square" ></i
						>  Javascript
					</div><hr/>
                    <div className="react">
						<i class="fab fa-react" ></i>React
					</div><hr/>
                    <div className="node">
						<i class="fab fa-node-js"></i> Node
					</div><hr/>
                    <div className="ps">
						<i class="fas fa-cogs" ></i> Problem solving
					</div><hr/>



                </div>

            </section>
        </div>
    )
}

export default Skill;
