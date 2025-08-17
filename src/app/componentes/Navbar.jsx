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
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Navbar({ variant = "light" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

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

              {/* Services Dropdown */}
              <li
                className="dropdown"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span className="dropdown-toggle">Service</span>
                {servicesOpen && (
                  <div class="mega-dropdown">
                    <ul class="row">
                      <li>
                        <Link href="/web-dev">Website Development</Link>
                        </li>
                      <li>Mobile Development</li>
                      <li>Custom Software Development</li>
                      <li>AI & Machine Learning Solution</li>
                      <li>Data & Analytics</li>
                    </ul>

                    <ul class="row">
                      <li>IT Staff Augmentation</li>
                      <li>UI/UX Design & Product Strategy</li>
                      <li>Digital Transformation Consultation</li>
                    </ul>

                    <ul class="row">
                      <li>Shopify Development</li>
                      <li>WooCommerce Development</li>
                      <li>Store Migration & Platform Integration</li>
                    </ul>
                    <ul class="row">
                      <li>SEO & Analysis</li>
                      <li>Paid Marketing</li>
                    </ul>
                  </div>

                )}
              </li>


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













