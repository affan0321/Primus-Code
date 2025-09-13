import React from 'react';
import './Hero.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="hero">
            {/* Animated Lines */}
            <div className="hero-lines">
                
                <div className="v-line" style={{ left: "10%", animationDelay: "1s" }} />
                <div className="v-line" style={{ left: "30%", animationDelay: "1s" }} />
                <div className="v-line" style={{ left: "50%", animationDelay: "1s" }} />
                <div className="v-line" style={{ left: "70%", animationDelay: "1s" }} />
                <div className="v-line" style={{ left: "90%", animationDelay: "1s" }} />
                <div className="v-line" style={{ left: "20%", animationDelay: "1s" }} />
                <div className="v-line" style={{ left: "40%", animationDelay: "1s" }} />
                <div className="v-line" style={{ left: "60%", animationDelay: "1s" }} />
                <div className="v-line" style={{ left: "80%", animationDelay: "1s" }} />
                <div className="v-line" style={{ left: "100%", animationDelay: "1s" }} />

                
                <div className="h-line" style={{ top: "20%", animationDelay: "0.5s" }} />
                <div className="h-line" style={{ top: "40%", animationDelay: "0.5s" }} />
                <div className="h-line" style={{ top: "60%", animationDelay: "0.5s" }} />
                <div className="h-line" style={{ top: "80%", animationDelay: "0.5s" }} />
                <div className="h-line" style={{ top: "10%", animationDelay: "0.5s" }} />
                <div className="h-line" style={{ top: "30%", animationDelay: "0.5s" }} />
                <div className="h-line" style={{ top: "50%", animationDelay: "0.5s" }} />
                <div className="h-line" style={{ top: "70%", animationDelay: "0.5s" }} />
                
               

                



            </div>

            <div className="container">
                <div className='hero-content'>
                    <div>
                        <div>
                            <h1>Crafting Digital Solutions That <span>Drive Growth</span></h1>
                            <p>We empower businesses to thrive in the digital landscape with end-to-end technology and marketing solutions. </p>
                            <button className='btn1'>Getting Started</button>
                            <Link href="/skills"><button className='btn2'>Our Work</button></Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src="/a.png" alt="Cube" width={490} height={421} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
