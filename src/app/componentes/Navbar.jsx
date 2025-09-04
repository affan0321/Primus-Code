"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import MegaDropdown from "./MegaDropdown";

export default function Navbar({ variant = "light" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // ✅ track screen size
  const dropdownRef = useRef(null);

  // Close services dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scroll on mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  // Animate navbar drop
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".navbar")?.classList.add("visible");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Detect screen size
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="header">
      <div
        className={`navbar ${variant === "dark" ? "dark-navbar" : "light-navbar"}`}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <div className="logo">
            <img
              src={variant === "dark" ? "/Logo-04.png" : "/Logo-03.png"}
              width={100}
              alt="Primus Code Logo"
            />
          </div>

          {/* ✅ Hamburger (only render on mobile/tablet) */}
          {isMobile && (
            <div
              className={`hamburger ${variant === "dark" ? "dark-hamburger" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          )}

          {/* Navigation Links */}
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
             
                <MegaDropdown />
               <li>
                <Link href="/skills">Our Work</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <Link href="/contact" passHref>
                <button className="btn4">Contact Us</button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}









