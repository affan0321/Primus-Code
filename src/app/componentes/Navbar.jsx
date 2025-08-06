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


"use client";
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar({ variant = 'light' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  return (
    <div className="header">
      <div className={`navbar ${variant === 'dark' ? 'dark-navbar' : 'light-navbar'}`}>
        <div className="navbar-inner">
          <div className="logo">
            <img
              src={variant === 'dark' ? '/Logo-04.png' : '/Logo-03.png'}
              width={100}
              alt="Primus Code Logo"
            />
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/skills">Skills</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <button>Contact Us</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}














