"use client";
import React, { useEffect, useRef } from 'react';
import './Company.css';
import Link from 'next/link';
export default function Company() {
    const companyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.15}s`;
            entry.target.classList.add("animate-company");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (companyRef.current) {
      const items = companyRef.current.querySelectorAll(".company > div");
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);
    return(
        <div className='company'ref={companyRef}>
            <div className='img-container'>
                <div className='img-text'>
                <h3>REX Inc</h3>
                <p>Website Development</p>
                </div>
            </div>
            <div className='text-container'>
                <h2>Our Work <span>Speaks For Itself</span></h2>
                <p>See How We’ve Helped Brands Transform <br /> Their Digital Presence</p>
                <Link href="/skills"><p className='btn6'>Our Work</p></Link>
            </div>
            <div className='img-container1'>
                <div className='img-text'>
                <h3>REX Inc</h3>
                <p>Custom Software Development</p>
                </div>
            </div>
            <div className='img-container2'>
                <div className='img-text'>
                <h3>REX Inc</h3>
                <p>AI & Machine Learning Solutions</p>
                </div>
            </div>
            <div className='img-container3'>
                <div className='img-text'>
                <h3>REX Inc</h3>
                <p>SEO & Paid Ads</p>
                </div>
            </div>
            <div className='img-container4'>
                <div className='img-text'>
                <h3>REX Inc</h3>
                <p>Mobile Application Development</p>
                </div>
            </div>
        </div>
    )
}