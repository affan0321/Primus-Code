"use client"
import React from 'react';
import './Work.css';
import { useRef,useEffect } from 'react';
import Link from 'next/link';

export default function Work() {
   const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll('.work-card, .work-card1');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="work"ref={sectionRef}>
      <div className="work-text">
        <h2>
          What We Do <span>Best</span>
        </h2>
        <p>
          End-to-end digital services designed to transform ideas into powerful,
          scalable,<br />
          and user-centric solutions.
        </p>
      </div>

      <div className="work-container">
        <div className="work-card">
          <h3>Development & Implementation</h3>
          <ul className='ul'>
            <Link href="/web-dev"><li>Website Development</li></Link>
            <Link href="/mob-dev"><li>Mobile App Development</li></Link>
            <Link href="/software-dev"><li>Custom Software Development</li></Link>
            <Link href="/AI"><li>AI & Machine Learning Solutions</li></Link>
            <Link href="data"><li>Data & Analytics (Data Warehousing & ETL, BI Dashboards & Reporting)</li></Link>
          </ul>
        </div>

        <div className="work-card1">
          <h3>Consulting & Staff Augmentation</h3>
          <ul className='ul'>
            <Link href="IT"><li>IT Staff Augmentation (Developers, QA, DevOps)</li></Link>
            <Link href="UI"><li>UI/UX Design & Product Strategy</li></Link>
            <Link href="digital"><li>Digital Transformation Consulting (Process Audits, Technology Roadmaps)</li></Link>
          </ul>
        </div>

        <div className="work-row">
          <div className="work-card wide">
            <h3>E-Commerce Solutions</h3>
            <ul className='ul'>
              <Link href="shopify"><li>Shopify Development</li></Link>
              <Link href="wooCommerce"><li>WooCommerce Development</li></Link>
              <Link href="store"><li>Store Migrations & Platform Integrations</li></Link>
            </ul>
          </div>

          <div className="work-card narrow">
            <h3>Digital Marketing Services</h3>
            <ul className='ul'>
              <Link href="SEO"><li>SEO & Analytics</li></Link>
              <Link href="paid-marketing"><li>Paid Media (PPC & Social Ads)</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
