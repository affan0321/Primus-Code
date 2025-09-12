// "use client"
// import { useEffect, useState, useRef } from "react";
// import './StatsOdometer.css'

// export default function StatsOdometer() {
//   useEffect(() => {
//   const node = statRef.current;
//   if (!node) return;

//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       if (entry.isIntersecting && !hasAnimated) {
//         animateCount();
//         setHasAnimated(true);
//       }
//     },
//     { threshold: 0.1 } // trigger sooner
//   );

//   observer.observe(node);

//   // ✅ check immediately on mount
//   if (node.getBoundingClientRect().top < window.innerHeight) {
//     animateCount();
//     setHasAnimated(true);
//   }

//   return () => observer.disconnect();
// }, [value, hasAnimated]);

//   return (
//     <section className="stats-section" id="stats">
//       <div className="stats-container">
//         {/* Left Stats */}
//         <div className="stats-grid">
//           <Stat value={95} suffix="%" label="Client Satisfaction Rate" />
//           <Stat value={10} suffix="+" label="Years of Combined Team Experience" />
//           <Stat value={1000} suffix="+" label="User Engaged Through Our Solution" />
//           <Stat value={100} suffix="+" label="Successful Projects Delivered" />
//         </div>

//         {/* Right Content */}
//         <div className="stats-content">
//           <h2>
//             Your Partner In Digital <br />
//             <span>Growth & Innovation</span>
//           </h2>
//           <p>
//             At Primus Code, we don’t just build products, we create digital
//             solutions that solve real business challenges. From websites and
//             mobile apps to AI-driven systems and eCommerce platforms, our expert
//             teams deliver tailored, scalable, and high-performing solutions
//             designed around your goals. Whether you’re a startup looking to
//             launch or an enterprise aiming to optimize and transform, we help
//             you turn ideas into impact.
//           </p>
//           <a href="#" className="learn-more">Learn More →</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Stat({ value, suffix, label }) {
//   const [count, setCount] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const statRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           animateCount();
//           setHasAnimated(true);
//         }
//       },
//       { threshold: 0.5 } // trigger when 50% visible
//     );

//     if (statRef.current) {
//       observer.observe(statRef.current);
//     }

//     return () => {
//       if (statRef.current) observer.unobserve(statRef.current);
//     };
//   }, [value, hasAnimated]);

//   const animateCount = () => {
//     let start = 0;
//     const end = value;
//     const duration = 2000; // animation time (ms)
//     const stepTime = Math.max(Math.floor(duration / end), 10); // avoid too fast for small numbers

//     const timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start >= end) clearInterval(timer);
//     }, stepTime);
//   };

//   return (
//     <div className="stat-box" ref={statRef}>
//       <div className="stat-value">
//         {count.toLocaleString()}
//         <span>{suffix}</span>
//       </div>
//       <p className="stat-label">{label}</p>
//     </div>
//   );
// }


"use client";
import { useEffect, useState, useRef } from "react";
import "./StatsOdometer.css";

export default function StatsOdometer() {
  return (
    <section className="stats-section" id="stats">
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
          <a href="#" className="learn-more">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
  const node = statRef.current;
  if (!node) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !hasAnimated) {
      animateCount();
      setHasAnimated(true);
    }
  }, { threshold: 0.5 });

  observer.observe(node);

  // ✅ immediate check in case it's already visible
  if (node.getBoundingClientRect().top < window.innerHeight) {
    animateCount();
    setHasAnimated(true);
  }

  return () => observer.disconnect();
}, [value, hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const end = value;
    const duration = 2000; // ms
    const stepTime = Math.max(Math.floor(duration / end), 10);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
  };

  return (
    <div className="stat-box" ref={statRef}>
      <div className="stat-value">
        {count.toLocaleString()}
        <span>{suffix}</span>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  );
}
