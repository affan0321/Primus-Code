"use client"
import React from 'react';
import './Work.css';
import { useRef,useEffect } from 'react';

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
          <ul>
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>Custom Software Development</li>
            <li>AI & Machine Learning Solutions</li>
            <li>Data & Analytics (Data Warehousing & ETL, BI Dashboards & Reporting)</li>
          </ul>
        </div>

        <div className="work-card1">
          <h3>Consulting & Staff Augmentation</h3>
          <ul>
            <li>IT Staff Augmentation (Developers, QA, DevOps)</li>
            <li>UI/UX Design & Product Strategy</li>
            <li>Digital Transformation Consulting (Process Audits, Technology Roadmaps)</li>
          </ul>
        </div>

        <div className="work-row">
          <div className="work-card wide">
            <h3>E-Commerce Solutions</h3>
            <ul>
              <li>Shopify Development</li>
              <li>WooCommerce Development</li>
              <li>Store Migrations & Platform Integrations</li>
            </ul>
          </div>

          <div className="work-card narrow">
            <h3>Digital Marketing Services</h3>
            <ul>
              <li>SEO & Analytics</li>
              <li>Paid Media (PPC & Social Ads)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
