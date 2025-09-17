"use client";
import { useEffect, useRef, useState } from "react";
import './Visions.css'

export default function Visions(){
    const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current); // animate once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

    return(
        <div ref={sectionRef}  className={`visions ${isVisible ? "animate" : ""}`}>
            <div className='visions-container'>
                <div>
                    <h3>Bring Your Vision <span>To Their Fingertips</span></h3>
                    <p>In today’s mobile-first world, having an app isn’t a luxury — it’s a necessity. At [Your Agency Name], we help startups, small businesses, and growing brands launch high-performing mobile apps that engage users, solve real problems, and drive business growth. Whether it’s iOS, Android, or cross-platform, we build apps that users love and businesses rely on.</p>
                </div>
                <div>
                    <img src="/Frames (1).png" width={400} />
                </div>
            </div>
        </div>
    )
}