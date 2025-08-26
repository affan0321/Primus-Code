import React from 'react';
import './Partner.css';
export default function Partner({ reverse = false }) {
    return (
        <div className={`partner ${reverse ? 'reverse' : ''}`}>
            <div className='partner-container'>
                <div className='partner-content'>
                <div>
                    <h1>95%</h1>
                    <p>Client Satisfaction <br /> Rate</p>
                </div>
                <div>
                    <h1>1,000+</h1>
                    <p>User Engaged Through <br /> Our Solution</p>
                </div>
                </div>
                <div className='partner-content'>
                    <div>
                    <h1>10+</h1>
                    <p>Years of Combined <br /> Team Experience</p>
                </div>
                
                <div>
                    <h1>100+</h1>
                    <p>Successful Projects <br /> Delivered</p>
                </div>
                </div>
            </div>
            <div className='partner-text'>
                <h2>Your Partner In Digital <br /> <span>Growth & Innovation</span></h2>
                <p>At Primus Code, we don’t just build products, we create digital solutions that solve real  business challenges. From websites and mobile apps to AI-driven systems and  eCommerce platforms, our expert teams deliver tailored, scalable, and high-performing  solutions designed around your goals.
                    Whether you’re a startup looking to launch or an enterprise aiming to optimize and  transform, we help you turn ideas into impact.</p>
                <button className='btn3'>Learn More &rarr;</button>
            </div>
            
        </div>
    )
}