import React from 'react';
import './Offer.css';
import Image from 'next/image';
export default function Offer() {
    return(
        <div className='offer'>
            <div className='offer-text'>
                <h1>How It Works</h1>
                <p>A simple, transparent process designed to keep you informed and <br /> in control—every step of the way. From the first consultation to final <br /> delivery, we focus on building solutions that align perfectly with <br /> your goals.</p>
                <img src='/Rectangle 160.png' />
            </div>
            <div className='offer-container'>
                <div className='offer-content'>
                    <div>
                        <img src="/img8.png" width={50} />
                    </div>
                    <div>
                        <h3>Discovery & Consultation</h3>
                        <p>We meet with you to learn about your business, your goals, and your <br /> target audience.</p>
                    </div>

                    <div>
                        <img src="/img7.png" width={50}/>
                    </div>
                    <div>
                        <h3>Strategy & Planning</h3>
                        <p>Our team crafts a detailed roadmap—from design and development <br /> to deployment and marketing.</p>
                    </div>

                    <div>
                        <img src="/img6.png" width={50}/>
                    </div>
                    <div>
                        <h3>Design, Build & Test</h3>
                        <p>We design user-first experiences, develop with best practices, and <br /> rigorously test for quality.</p>
                    </div>

                    <div>
                        <img src="/img5.png" width={50} />
                    </div>
                    <div>
                        <h3>Launch & Support</h3>
                        <p>After go-live, we provide continuous support, optimization, and <br /> improvements as your business grows.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}