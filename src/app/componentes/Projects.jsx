// import Image from 'next/image';
// import React from 'react';
// import './Projects.css';

// export default function Projects() {
//     return(
//         <div className="projects">
//             <div className='projects-text'>
//                 <h4>OUR WORK ACROSS INDUSTRIES</h4>
//                 <h1>Crafting High-Impact Websites</h1>
//                 <div className='project-paragraph'>
//                 <p>From marketing sites to complex platforms, our web development projects blend performance, responsiveness, and seamless user experience to bring your brand to life online.</p>
//                 </div>
//                 <div className='projects-btn'>
//                 <div className='projects-btn-text'>
//                     <button>Website Development</button>
//                 </div>
//                 <div className='projects-btn-text'>
//                     <button className='btn24'>Mobile App Development & UI/UX Design</button>
//                 </div>
//                 <div className='projects-btn-text'>
//                     <button>Custom Software Development</button>
//                 </div>
//                 </div>
//                 <div className='projects-img'>
//                     <div>
//                         <img src="/Img1.png" width={250}/>
//                     </div>
//                     <div>
//                         <img src="/img2.png" width={250} />
//                     </div>
//                     <div>
//                         <img src="/img3.png" width={250} />
//                     </div>
//                     <div>
//                         <img src="/img4.png" width={250} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }


// "use client"
// import React, { useState, useEffect, useRef } from "react";
// import "./Projects.css";

// export default function Projects() {
//     // Track which category is active
//     const [activeCategory, setActiveCategory] = useState("website");
//      const sectionRef = useRef(null);

//     // Image data for each category
//     const images = {
//         website: ["/Img1.png", "/img2.png", "/img3.png", "/img4.png"],
//         mobile: ["/Img1.png", "/img2.png", "/img3.png", "/img4.png"],
//         software: ["/Img1.png", "/img2.png", "/img3.png", "/img4.png"],
//     };

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add("animate-projects");
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.2 }
//         );

//         if (sectionRef.current) observer.observe(sectionRef.current);

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <div className="projects" ref={sectionRef}>
//             <div className="projects-text">
//                 <h4>OUR WORK ACROSS INDUSTRIES</h4>
//                 <h1>Crafting High-Impact Websites</h1>
//                 <div className="project-paragraph">
//                     <p>
//                         From marketing sites to complex platforms, our web development
//                         projects blend performance, responsiveness, and seamless user
//                         experience to bring your brand to life online.
//                     </p>
//                 </div>

//                 {/* Buttons */}
//                 <div className="projects-btn">
//                     <div className="projects-btn-text">
//                         <button
//                             className={activeCategory === "website" ? "active" : ""}
//                             onClick={() => setActiveCategory("website")}
//                         >
//                             Website Development
//                         </button>
//                     </div>
//                     <div className="projects-btn-text">
//                         <button
//                             className={`btn24 ${activeCategory === "mobile" ? "active" : ""}`}
//                             onClick={() => setActiveCategory("mobile")}
//                         >
//                             Mobile App Development & UI/UX Design
//                         </button>
//                     </div>
//                     <div className="projects-btn-text">
//                         <button
//                             className={activeCategory === "software" ? "active" : ""}
//                             onClick={() => setActiveCategory("software")}
//                         >
//                             Custom Software Development
//                         </button>
//                     </div>
//                 </div>

//                 <div className="projects-img">
//                     {images[activeCategory].map((src, index) => (
//                         <div
//                             key={`${activeCategory}-${index}`}
//                             className="fade-in"
//                         >
//                             <img src={src} width={250} alt="project" />
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </div>
//     );
// }







// "use client"
// import React, { useState, useEffect, useRef } from "react";
// import "./Projects.css";

// export default function Projects() {
//   // Track which category is active
//   const [activeCategory, setActiveCategory] = useState("website");
//   const sectionRef = useRef(null);

//   // Image data for each category
//   const images = {
//     website: ["/Img1.png", "/img2.png", "/img3.png", "/img4.png"],
//     mobile: ["/Img1.png", "/img2.png", "/img3.png", "/img4.png"],
//     software: ["/Img1.png", "/img2.png", "/img3.png", "/img4.png"],
//   };

//   // Text content for each category
//   const content = {
//     website: {
//       title: "Crafting High-Impact Websites",
//       paragraph:
//         "From marketing sites to complex platforms, our web development projects blend performance, responsiveness, and seamless user experience to bring your brand to life online.",
//     },
//     mobile: {
//       title: "Mobile Apps That Make a Difference",
//       paragraph:
//         " Whether it’s iOS, Android, or cross-platform, our app development work focuses on usability, speed, and scalable architecture—built for real-world impact.",
//     },
//     software: {
//       title: "Purpose-Built Software Solutions",
//       paragraph:
//         "See how we’ve engineered custom software to solve complex business problems, streamline workflows, and deliver powerful digital tools that scale.",
//     },
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-projects");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="projects" ref={sectionRef}>
//       <div className="projects-text">
//         <h4>OUR WORK ACROSS INDUSTRIES</h4>
//         <h1>{content[activeCategory].title}</h1>
//         <div className="project-paragraph">
//           <p>{content[activeCategory].paragraph}</p>
//         </div>

//         {/* Buttons */}
//         <div className="projects-btn">
//           <div className="projects-btn-text">
//             <button
//               className={activeCategory === "website" ? "active" : ""}
//               onClick={() => setActiveCategory("website")}
//             >
//               Website Development
//             </button>
//           </div>
//           <div className="projects-btn-text">
//             <button
//               className={`btn24 ${activeCategory === "mobile" ? "active" : ""}`}
//               onClick={() => setActiveCategory("mobile")}
//             >
//               Mobile App Development & UI/UX Design
//             </button>
//           </div>
//           <div className="projects-btn-text">
//             <button
//               className={activeCategory === "software" ? "active" : ""}
//               onClick={() => setActiveCategory("software")}
//             >
//               Custom Software Development
//             </button>
//           </div>
//         </div>

//         {/* Images */}
//         <div className="projects-img">
//           {images[activeCategory].map((src, index) => (
//             <div key={`${activeCategory}-${index}`} className="fade-in">
//               <img src={src} width={250} alt="project" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



"use client"
import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";

export default function Projects() {
  // Track which category is active
  const [activeCategory, setActiveCategory] = useState("website");
  const sectionRef = useRef(null);

  // Image + text data
  const images = {
    website: [
      { src: "/Img1.png" },
      { src: "/img2.png" },
      { src: "/img3.png" },
      { src: "/img4.png" },
    ],
    mobile: [
      {
        src: "/Frame 4(1).png",
        title: "Travelwise",
        description:
          "A traveling navigation app. A new way of thinking about urban mobility as an interconnected system.",
      },
      {
        src: "/Frame 4(2).png",
        title: "FitTrack",
        description:
          "A fitness tracking app helping users monitor workouts, meals, and health goals in real time.",
      },
      {
        src: "/pangobooks.png",
        title: "EduMate",
        description:
          "An interactive learning app designed for students to collaborate and learn smarter.",
      },
      
    ],
    software: [
      {
        src: "/Img1.png",
        title: "BizFlow",
        description:
          "A business management platform streamlining workflows, finance, and team collaboration.",
      },
      {
        src: "/img2.png",
        title: "MediCore",
        description:
          "Custom healthcare software for patient records, appointments, and telemedicine support.",
      },
      {
        src: "/img3.png",
        title: "AutoSys",
        description:
          "Automation software designed to boost operational efficiency for enterprises.",
      },
      {
        src: "/img4.png",
        title: "DataViz Pro",
        description:
          "A data visualization tool helping companies unlock insights with interactive dashboards.",
      },
    ],
  };

  // Text content for each category
  const content = {
    website: {
      title: "Crafting High-Impact Websites",
      paragraph:
        "From marketing sites to complex platforms, our web development projects blend performance, responsiveness, and seamless user experience to bring your brand to life online.",
    },
    mobile: {
      title: "Mobile Apps That Make a Difference",
      paragraph:
        "We design and develop mobile applications with sleek UI/UX and robust functionality, ensuring smooth experiences across iOS and Android that engage and retain users.",
    },
    software: {
      title: "Custom Software, Tailored for You",
      paragraph:
        "Our software solutions are crafted to solve unique business challenges. From automation tools to enterprise platforms, we deliver scalable and reliable custom software.",
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-projects");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects" ref={sectionRef}>
      <div className="projects-text">
        <h4>OUR WORK ACROSS INDUSTRIES</h4>
        <h1>{content[activeCategory].title}</h1>
        <div className="project-paragraph">
          <p>{content[activeCategory].paragraph}</p>
        </div>

        {/* Buttons */}
        <div className="projects-btn">
          <div className="projects-btn-text">
            <button
              className={activeCategory === "website" ? "active" : ""}
              onClick={() => setActiveCategory("website")}
            >
              Website Development
            </button>
          </div>
          <div className="projects-btn-text">
            <button
              className={`btn24 ${activeCategory === "mobile" ? "active" : ""}`}
              onClick={() => setActiveCategory("mobile")}
            >
              Mobile App Development & UI/UX Design
            </button>
          </div>
          <div className="projects-btn-text">
            <button
              className={activeCategory === "software" ? "active" : ""}
              onClick={() => setActiveCategory("software")}
            >
              Custom Software Development
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="projects-img">
          {images[activeCategory].map((item, index) => (
            <div key={`${activeCategory}-${index}`} className="fade-in project-card">
              <img src={item.src} width={250} alt="project"
               style={
          activeCategory === "mobile"
            ? {
                width: index === 0 ? "250px" : index === 1 ? "250px" : "250px",
                height: index === 0 ? "" : index === 1 ? "" : "",
                objectFit: "cover",
              }
            : { width: "250px", height: "auto" }}
              />
              {/* Only show title + description if available */}
              {item.title && (
                <div className="project-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
