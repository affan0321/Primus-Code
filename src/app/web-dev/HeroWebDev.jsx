"use client"
import './HeroWebDev.css'
import { useEffect, useState } from "react";
export default function HeroWebDev() {
const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setTimeout(() => setAnimate(true), 100); 
  }, []);
  
  return (
        <div className={`HeroWebDev ${animate ? 'animate' : ''}`} 
             onClick={() => setAnimate(true)}
                >
            <div className="HeroWebDev-container">
                <div className="HeroWebDev-content">
                    <div>
                        <div>
                            <h1>Building High-Performing Websites <span>That Convert</span></h1>
                            <p>We empower businesses to thrive in the digital landscape with end-to-end technology and marketing solutions. </p> <br />
                            <button className='btn1'>Getting Started</button>
                            <button className='btn2'>Our Work</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/Group 143.png" alt="Cube" width={490} height={421} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

