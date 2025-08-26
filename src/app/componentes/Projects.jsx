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


"use client"
import React, { useState } from "react";
import "./Projects.css";

export default function Projects() {
    // Track which category is active
    const [activeCategory, setActiveCategory] = useState("website");

    // Image data for each category
    const images = {
        website: ["/Img1.png", "/img2.png", "/img3.png", "/img4.png"],
        mobile: ["/Img1.png", "/img2.png", "/img3.png", "/img4.png"],
        software: ["/Img1.png", "/img2.png", "/img3.png", "/img4.png"],
    };

    return (
        <div className="projects">
            <div className="projects-text">
                <h4>OUR WORK ACROSS INDUSTRIES</h4>
                <h1>Crafting High-Impact Websites</h1>
                <div className="project-paragraph">
                    <p>
                        From marketing sites to complex platforms, our web development
                        projects blend performance, responsiveness, and seamless user
                        experience to bring your brand to life online.
                    </p>
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
                {/* <div className="projects-img">
                    {images[activeCategory].map((src, index) => (
                        <div key={index}>
                            <img src={src} width={250} alt="project" />
                        </div>
                    ))}
                </div> */}

                <div className="projects-img">
                    {images[activeCategory].map((src, index) => (
                        <div
                            key={`${activeCategory}-${index}`}
                            className="fade-in"
                        >
                            <img src={src} width={250} alt="project" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
