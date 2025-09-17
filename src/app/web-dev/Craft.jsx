"use client"
import './Craft.css'
import { useEffect, useRef, useState } from "react";

export default function Craft() {
    
     const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target); // run once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);


    return (
        <div className='craft'ref={ref}>
            <div className={`craft-container ${animate ? "animate" : ""}`}>
                <div >
                    <h3>Crafting Websites that <span>Work For You</span></h3>
                    <div className='craft-container-p'>
                        <p>Your website is your digital storefront — it should be fast, functional, and fully aligned with your brand. At [Your Agency Name], we create responsive, conversion-driven websites that not only look stunning but also deliver real results. Whether you’re launching a new site or revamping an existing one, our team ensures every pixel and interaction serves a purpose.</p>
                    </div>
                </div>
                <div>
                    <img src="/Version.png" width={400} />
                </div>
            </div>
        </div>
    )
}