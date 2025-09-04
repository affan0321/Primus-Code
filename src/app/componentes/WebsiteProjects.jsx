"use client"
import React from "react";
import './WebsiteProjects.css'
export default function WebsiteProjects({ content, images, activeCategory, setActiveCategory }) {
  return (
    <div className="projects website-projects">
      <div className="projects-text">
        <h4>OUR WORK ACROSS INDUSTRIES</h4>
        <h1>{content.title}</h1>
        <div className="project-paragraph">
          <p>{content.paragraph}</p>
        </div>

        {/* ✅ Buttons here below h1 & p */}
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
        <div className="projects-img website-flex">
          {images.map((item, index) => (
            <div key={`website-${index}`} className="fade-in project-card">
              <img src={item.src} alt="Website Project" width={250} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
