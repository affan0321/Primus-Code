"use client"
import React from "react";
import './SoftwareProjects.css'
export default function SoftwareProjects({ content, images, activeCategory, setActiveCategory }) {
  return (
    <div className="projects software-projects">
      <div className="projects-text">
        <h4>OUR WORK ACROSS INDUSTRIES</h4>
        <h1>{content.title}</h1>
        <div className="project-paragraph">
          <p>{content.paragraph}</p>
        </div>

        {/* ✅ Buttons */}
        <div className="projects-btn">
          <button
            className={activeCategory === "website" ? "active" : ""}
            onClick={() => setActiveCategory("website")}
          >
            Website Development
          </button>
          <button
            className={activeCategory === "mobile" ? "active" : ""}
            onClick={() => setActiveCategory("mobile")}
          >
            Mobile App Development & UI/UX
          </button>
          <button
            className={activeCategory === "software" ? "active" : ""}
            onClick={() => setActiveCategory("software")}
          >
            Custom Software Development
          </button>
        </div>

        {/* ✅ Images */}
        <div className="projects-img software-flex">
          {images.map((item, index) => (
            <div key={`software-${index}`} className="fade-in project-card">
              <img src={item.src} alt={item.title} width={350} />
              <div className="project-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
