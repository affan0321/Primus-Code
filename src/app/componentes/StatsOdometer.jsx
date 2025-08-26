"use client"
import { useEffect, useState } from "react";
import './StatsOdometer.css'
export default function StatsOdometer() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {/* Left Stats */}
        <div className="stats-grid">
          <Stat value={95} suffix="%" label="Client Satisfaction Rate" />
          <Stat value={10} suffix="+" label="Years of Combined Team Experience" />
          <Stat value={1000} suffix="+" label="User Engaged Through Our Solution" />
          <Stat value={100} suffix="+" label="Successful Projects Delivered" />
        </div>

        {/* Right Content */}
        <div className="stats-content">
          <h2>
            Your Partner In Digital <br />
            <span>Growth & Innovation</span>
          </h2>
          <p>
            At Primus Code, we don’t just build products, we create digital
            solutions that solve real business challenges. From websites and
            mobile apps to AI-driven systems and eCommerce platforms, our expert
            teams deliver tailored, scalable, and high-performing solutions
            designed around your goals. Whether you’re a startup looking to
            launch or an enterprise aiming to optimize and transform, we help
            you turn ideas into impact.
          </p>
          <a href="#" className="learn-more">Learn More →</a>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // animation time (ms)
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="stat-box">
      <div className="stat-value">
        {count.toLocaleString()}
        <span>{suffix}</span>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  );
}
