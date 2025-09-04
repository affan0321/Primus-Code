"use client"
import React, { useState } from "react";
import WebsiteProjects from "./WebsiteProjects";
import MobileProjects from "./MobileProjects";
import SoftwareProjects from "./SoftwareProjects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("website");

  // ✅ Images
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
        src: "/Frame 4(4).png",
        title: "Talenthub",
        description:
          "Our team developed TalentHub, a centralized web platform designed to manage and track employees' skills and knowledge. ",
      },
      {
        src: "/Frame 4(5).png",
        title: "Lovethesale",
        description:
          "Love the Sales is an online marketplace showcasing discounted clothing, home-ware and tech products, helping consumers find sales items across hundreds of popular brands.",
      },
      {
        src: "/Frame 4(6).png",
        title: "Boston Dynamics",
        description:
          "Developed an edge-based analytics solutions that process data in real time at the source, enabling faster insights, reduced latency, and smarter operational decision-making.",
      },
      
    ],
  };

  // ✅ Text content
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

  return (
    <div>
      {activeCategory === "website" && (
        <WebsiteProjects
          content={content.website}
          images={images.website}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}
      {activeCategory === "mobile" && (
        <MobileProjects
          content={content.mobile}
          images={images.mobile}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}
      {activeCategory === "software" && (
        <SoftwareProjects
          content={content.software}
          images={images.software}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}
    </div>
  );
}
