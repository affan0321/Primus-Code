"use client"
import { useEffect, useState } from "react";
import './SkillsInnerHero.css'
export default function SkillsInnerHero() {
     const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // small delay for smoother effect
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={`SkillsInnerHero ${isVisible ? "show" : ""}`}>
            <div className='SkillsInnerHero-container'>
                <div className='SkillsInnerHero-content'>
                    <h2>Empowering Real-Time Insights for NovaMed — A Healthcare Supply Chain Company </h2>
                    <button>Custom Software Development</button>
                </div>
            </div>
        </div>
    )
}