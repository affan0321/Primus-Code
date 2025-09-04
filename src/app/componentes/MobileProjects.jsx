"use client"
import React from "react";
import './MobileProjects.css'
export default function MobileProjects({ content, images, activeCategory, setActiveCategory }) {
  return (
    <div className="projects mobile-projects">
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
        <div className="projects-img mobile-flex">
          {images.map((item, index) => (
            <div key={`mobile-${index}`} className="fade-in project-card">
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: index === 0 ? "350px" : index === 1 ? "350px" : "350px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
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
