"use client";
import React, { useRef, useEffect } from 'react';
import './Questions.css';
import AccordionTransition from './Accordion';
export default function Questions() {
    const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-questions');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
    return (
        <div className='questions'ref={containerRef}>
            <div className='questions-container'>
                <div className='questions-text'>
                    <h2>Frequently Asked Questions</h2>
                    <div>
                    <p>A simple, transparent process designed to keep you informed and in control—every step of the way. From the first consultation to final delivery, we focus on building solutions that align perfectly with your goals.</p>
                    </div>
                    <button className='btn7'>Ask More Questions</button>
                </div>
                <div className='questions-content'>
                    <AccordionTransition />
                </div>
            </div>
        </div>
    )
}