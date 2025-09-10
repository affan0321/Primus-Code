"use client";
import React from "react";
import "./BoxGrid.css";

export default function BoxGrid() {
  return (
    <section className="core-values">
      <div className="boxes">
        {/* Row 1 - 2 boxes */}
        <div className="row">
          <div className="box">
            <h3>Client Focus</h3>
            <p>We prioritise your goals and success in every decision.</p>
          </div>
          <div className="box">
            <h3>Innovation Driven</h3>
            <p>We embrace fresh ideas and new technologies.</p>
          </div>
        </div>

        {/* Row 2 - 3 boxes */}
        <div className="row">
          <div className="box">
            <h3>Team Collaboration</h3>
            <p>Stronger together—great results come from teamwork.</p>
          </div>
          <div className="box">
            <h3>Transparent Communication</h3>
            <p>Clear, open, and honest collaboration at every step.</p>
          </div>
          <div className="box">
            <h3>Continuous Improvement</h3>
            <p>Always learning, evolving, and enhancing our processes.</p>
          </div>
        </div>

        {/* Row 3 - 4 boxes */}
        <div className="row">
          <div className="box">
            <h3>Quality Assurance</h3>
            <p>We deliver reliable, high-standard solutions every time.</p>
          </div>
          <div className="box">
            <h3>Integrity First</h3>
            <p>We uphold honesty, fairness, and ethical practices.</p>
          </div>
          <div className="box">
            <h3>Result Oriented</h3>
            <p>Focused on outcomes that create real business impact.</p>
          </div>
          <div className="box overlap">
            <h3>Customer Empowerment</h3>
            <p>We enable clients with solutions that drive growth.</p>
          </div>
        </div>
      </div>

      {/* Core Text */}
      <div className="core-text">
        <h2>
          Our <span>Core Values</span>
        </h2>
        <p>
          We value true innovation and giving our people freedom to find their own creative solutions 
          to the challenges we face. We’re all in the same boat – it’s time to begin the voyage.
        </p>
      </div>
    </section>
  );
}
