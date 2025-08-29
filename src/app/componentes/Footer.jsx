"use client";
import React, { useRef, useEffect } from 'react';
import './Footer.css';
export default function Footer() {
     const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-footer');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);
    return(
        <>
        <div className='footer'ref={footerRef}>
            <div className='footer-content'>
            <div>
                <img src="/Logo-04.png" width={100} />
                <div className='social-icons'>
                    <div>
                        <img src="/instagram.png" width={20}/>
                    </div>
                    <div>
                        <img src="/twitter.png" width={20} />
                    </div>
                    <div>
                        <img src="/facebook.png" width={20} />
                    </div>
                </div>
            </div>
            <div className='footer-links'>
                <div>
                    <ul>
                        <li>About Us</li>
                        <li>Our Work</li>
                        <li>Contact Us</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div>
                    <p><b>Email:</b> info@primuscode.com</p>
                    <p><b>Phone:</b> 111-222-1212</p>
                    <p><b>Address:</b> 111-222-1212</p>
                </div>
            </div>
            </div>
            
        </div>
        <div className='footer-bottom'>
                <div className='footer-bottom-text'>
                <div><p>© 2022 Embrace, Inc. - All Rights Reserved</p></div>
                <div className='footer-bottom-links'>
                    <div><p>Terms of use</p></div>
                    <div><p>Privacy Policy</p></div>
                </div>
                </div>
            </div>
            </>
    )
}  