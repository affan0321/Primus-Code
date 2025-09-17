"use client";
import { useEffect } from "react";
import './Vision.css'
export default function Vision() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");
                        observer.unobserve(entry.target); // animate once
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll(
            ".vision-container h2, .vision img"
        );
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    return (
        <div className='vision'>
            <div className="vision-container">
                <h2>How we bring your vision to life</h2>
            </div>
            <div style={{width:"70%",margin:"0 auto"}}>
            <img style={{marginBottom:"50px",marginTop:"50px"}} src="/Group 380.png" alt="" width={800}/>
            <img src="Frame 1.png" alt="" width={800}/>
            </div>
        </div>
    )
}