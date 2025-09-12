"use client"
import React, { useEffect, useRef } from 'react';
import './Banner.css';
import Link from 'next/link';
export default function Banner() {
    const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // run once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);
    return(   
        <div className="banner" ref={bannerRef}>
            <div className='banner-container'>
            <div className='banner-content'>
                <h1>Have A Project In Mind? Let's Bring It To Life</h1>
            </div>
            <div className='banner-text'>
                <p>Whether you need a custom website, a mobile app, AI-driven solutions, or expert consulting—we’re here to help turn your vision into reality. Get in touch with our team today and let’s discuss how we can make it happen</p>
                <Link href='/contact'><button className='btn4'>Contact Us</button></Link>
            </div>
        </div>
        </div>
    )
}