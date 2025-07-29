import React from 'react';
import './Hero.css';
import Image from 'next/image';
export default function Home() {
    return (
        <div className="hero">
            <div className="container">
                <div className='hero-content'>
                    <div>
                        <div>
                            <h1>Crafting Digital Solutions <br /> That <span>Drive Growth</span></h1><br />
                            <p>We empower businesses to thrive in the digital <br /> landscape with end-to-end technology and marketing <br /> solutions. </p> <br />
                            <button className='btn1'>Getting Started</button>
                            <button className='btn2'>Our Work</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src="/a.png" alt="Cube" width={490} height={421} />                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
