"use client"
import './HeroMobDev.css'
import { useEffect, useState } from "react";

export default function HeroMobDev() {
      const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // trigger animation when component mounts (dropdown opens)
        setAnimate(true);
    }, []);
    return (
        <div className="heroMobDev">
            <div className="heroMobDev-container">
                <div className="heroMobDev-content">
                    <div>
                        <div className={`heroMobDev-text ${animate ? "animate" : ""}`}>
                    <h3 style={{width:"500px",fontSize:"35px"}}>Turning Bold Ideas into <span style={{color:"#25FFA9"}}>Powerful Mobile Experiences</span></h3>
                    <p>We empower businesses to thrive in the digital landscape with end-to-end technology and marketing solutions. </p> <br />
                    <button className='btn1'>Getting Started</button>
                    <button className='btn2'>Our Work</button>
                    </div>
                </div>
                <div>
                        <div className={`heroMobDev-img ${animate ? "animate" : ""}`}>
                            <img src="/Frames.png" alt="Cube" width={490} height={421} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}