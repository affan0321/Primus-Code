// "use client"
// import React, { useState } from 'react';
// import './Navbar.css';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import Link from 'next/link';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="header">
//       <div className="navbar">
//         <div style={{ width: "95%", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <div className="logo">
//             <img src="/Logo-03.png" width={100} />
//           </div>

//           {/* Hamburger Icon */}
//           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>

//           {/* Navigation Links */}
//           <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
//             <ul>
//               <li><Link href="/about">About Us</Link></li>
//               <li>Services</li>
//               <li>Our Work</li>
//               <li>Blogs</li>
//               <button>Contact Us</button>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";
// import React, { useState } from 'react';
// import './Navbar.css';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import Link from 'next/link';

// export default function Navbar({ variant = 'light' }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Set dynamic navbar class based on variant
//   const navbarClass = variant === 'dark' ? 'navbar dark-navbar' : 'navbar light-navbar';

//   return (
//     <div className="header">
//       <div className={navbarClass}>
//         <div style={{
//           width: "95%",
//           margin: "0 auto",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center"
//         }}>
//           <div className="logo">
//             <img
//               src={variant === 'dark' ? '/Logo-04.png' : '/Logo-03.png'}
//               width={100}
//               alt="Primus Code Logo"
//             />
//           </div>

//           {/* Hamburger Icon */}
//           {/* <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div> */}

//           {/* <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             <FaBars />
//           </div> */}

//           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>


//           {/* Navigation Links */}
//           <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
//             <ul>
//               <li><Link href="/about">About Us</Link></li>
//               <li>Services</li>
//               <li>Our Work</li>
//               <li>Blogs</li>
//               <button>Contact Us</button>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












// "use client";
// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import Link from 'next/link';

// export default function Navbar({ variant = 'light' }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     if (menuOpen) {
//       document.body.classList.add("menu-open");
//     } else {
//       document.body.classList.remove("menu-open");
//     }
//   }, [menuOpen]);

//   return (
//     <div className="header">
//       <div className={`navbar ${variant === 'dark' ? 'dark-navbar' : 'light-navbar'}`}>
//         <div className="navbar-inner">
//           <div className="logo">
//             <img
//               src={variant === 'dark' ? '/Logo-04.png' : '/Logo-03.png'}
//               width={100}
//               alt="Primus Code Logo"
//             />
//           </div>

//           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>

//           <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
//             <ul>
//               <li><Link href="/about">About</Link></li>
//               {/* <li><Link href="/service">Service</Link></li> */}

//                {/* Services Dropdown */}
//               <li 
//                 className="dropdown"
//                 onMouseEnter={() => setServicesOpen(true)}
//                 onMouseLeave={() => setServicesOpen(false)}
//               >

//               <span className="dropdown-toggle">Services</span>
//                 {servicesOpen && (
//                   <div className="dropdown-menu">
//                     <div className="dropdown-grid">
//                       <div className="dropdown-column">
//                         <img src="/icons/dev.svg" alt="dev" />
//                         <ul>
//                           <li>Website Development</li>
//                           <li>Mobile App Development</li>
//                           <li>Custom Software Development</li>
//                           <li>AI & Machine Learning Solutions</li>
//                           <li>Data & Analytics</li>
//                         </ul>
//                       </div>
//                       <div className="dropdown-column">
//                         <img src="/icons/ux.svg" alt="ux" />
//                         <ul>
//                           <li>IT Staff Augmentation</li>
//                           <li>UI/UX Design & Product Strategy</li>
//                           <li>Digital Transformation Consulting</li>
//                         </ul>
//                       </div>
//                       <div className="dropdown-column">
//                         <img src="/icons/shopify.svg" alt="shopify" />
//                         <ul>
//                           <li>Shopify Development</li>
//                           <li>WooCommerce Development</li>
//                           <li>Store Migrations & Platform Integrations</li>
//                         </ul>
//                       </div>
//                       <div className="dropdown-column">
//                         <img src="/icons/seo.svg" alt="seo" />
//                         <ul>
//                           <li>SEO & Analysis</li>
//                           <li>Paid Marketing</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </li>


//               <li><Link href="/skills">Our Work</Link></li>
//               <li><Link href="/blogs">Blogs</Link></li>
//               <Link href="/contact" passHref>
//                 <button className="btn4">Contact Us</button>
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";
import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import MegaDropdown from "./MegaDropdown";

export default function Navbar({ variant = "light" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  useEffect(() => {
  const timer = setTimeout(() => {
    document.querySelector(".navbar")?.classList.add("visible");
  }, 100);
  return () => clearTimeout(timer);
}, []);


  return (
    <div className="header">
      <div
        className={`navbar ${variant === "dark" ? "dark-navbar" : "light-navbar"
          }`}
      >
        <div className="navbar-inner">
          <div className="logo">
            <img
              src={variant === "dark" ? "/Logo-04.png" : "/Logo-03.png"}
              width={100}
              alt="Primus Code Logo"
            />
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li><MegaDropdown /></li>

              {/* Services Dropdown */}
              {/* <li
                className="dropdown"
                // onMouseEnter={() => setServicesOpen(true)}
                // onMouseOut={() => setServicesOpen(false)}
                ref={dropdownRef}
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                <span className="dropdown-toggle">Service</span>
                {servicesOpen && (
                  <div class="mega-dropdown">
                    <ul class="row">
                      <img src="/Frames(13).png" width={50}  />
                      <li>
                        <Link href="/web-dev">Website Development</Link>
                      </li>
                      <li><Link href="/mob-dev">Mobile Development</Link></li>
                      <li><Link href="/software-dev">Custom Software Development</Link></li>
                      <li><Link href="/AI">AI & Machine Learning</Link></li>
                      <li><Link href="/data">Data & Analytics</Link></li>
                    </ul>

                    <ul style={{ height: "40px" }} class="row">
                      <img src="/Group(13).png" width={50}  />
                      <li><Link href="IT">IT Staff Augmentation</Link></li>
                      <li><Link href="UI">UI/UX Design & Product Strategy</Link></li>
                      <li><Link href="digital">Digital Transformation Consultation</Link></li>
                    </ul>

                    <ul style={{ height: "40px" }} class="row">
                      <img src="/Group (14).png" width={100} height={142}  />
                      <li><Link href="shopify">Shopify Development</Link></li>
                      <li><Link href="wooCommerce">WooCommerce Development</Link></li>
                      <li><Link href="store">Store Migration & Platform Integration</Link></li>
                    </ul>
                    <ul style={{ height: "40px" }} class="row">
                      <img style={{border:"2px solid black"}} src="/Group(15).png" width={100} height={140} />
                      <li><Link href="SEO">SEO & Analysis</Link></li>
                      <li><Link href="paid-marketing">Paid Marketing</Link></li>
                    </ul>
                  </div>

                )}
              </li> */}

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













