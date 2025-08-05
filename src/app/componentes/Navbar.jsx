// import React from 'react';
// import './Navbar.css';
// export default function Navbar() {
//   return (
//     <div className="header">
//         <div className="navbar">
//           <div style={{width:"95%",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//             <div className="logo">
//                 <h5>PRIMUS <br /> CODE</h5>
//         </div>
//         <div className="nav-links">
//             <ul>
//                 <li>About Us</li>
//                 <li>Services</li>
//                 <li>Our Work</li>
//                 <li>Blogs</li>
//                 <button>Contact Us</button>
//             </ul>
//         </div>
//     </div>
//     </div>
//     </div>
    
//   );
// }



// import React from 'react';
// import './Navbar.css';
// export default function Navbar() {
//   return (
//     <div className="header">
//         <div className="navbar">
//           <div style={{width:"95%",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
//             <div className="logo">
//                 <h5>PRIMUS <br /> CODE</h5>
//         </div>
//         <div className="nav-links">
//             <ul>
//                 <li>About Us</li>
//                 <li>Services</li>
//                 <li>Our Work</li>
//                 <li>Blogs</li>
//                 <button>Contact Us</button>
//             </ul>
//         </div>
//     </div>
//     </div>
//     </div>
    
//   );
// }

"use client"
import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="navbar">
        <div style={{ width: "95%", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="logo">
            <img src="/Logo-03.png" width={100} />
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation Links */}
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Our Work</li>
              <li>Blogs</li>
              <button>Contact Us</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}























// "use client";
// import React, { useState } from 'react';
// import './Navbar.css';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="header">
//       <div className="navbar">
//         <div className="navbar-inner">
//           <div className="logo">
//             <h5>PRIMUS <br /> CODE</h5>
//           </div>

//           <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
//             <ul>
//               <li>About Us</li>
//               <li>Services</li>
//               <li>Our Work</li>
//               <li>Blogs</li>
//               <button>Contact Us</button>
//             </ul>
//           </div>

//           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//             <span className="bar" />
//             <span className="bar" />
//             <span className="bar" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


