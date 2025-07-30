import React from 'react';
import './Questions.css';
import AccordionTransition from './Accordion';
export default function Questions() {
    return (
        <div className='questions'>
            <div className='questions-container'>
                <div className='questions-text'>
                    <h2>Frequently Asked Questions</h2>
                    <p>A simple, transparent process designed to keep you informed and <br /> in control—every step of the way. From the first consultation to final <br /> delivery, we focus on building solutions that align perfectly with <br /> your goals.</p>
                    <button className='btn7'>Ask More Questions</button>
                </div>
                <div className='questions-content'>
                    <AccordionTransition />
                </div>
            </div>
        </div>
    )
}