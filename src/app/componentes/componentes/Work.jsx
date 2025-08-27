// // import React from 'react';
// // import './Work.css';
// // export default function Work() {
// //     return (

// //         <div className='work'>
// //             <div className='work-text'>
// //                 <h2>What We Do <span>Best</span></h2>
// //                 <p>End-to-end digital services designed to transform ideas into powerful, scalable, <br /> and user-centric solutions.</p>
// //             </div>
// //             <div className='work-container'>
// //                 <div className='work-content'>
// //                     <h2>Development & Implementation</h2>
// //                     <ul>
// //                         <li>Website Development</li>
// //                         <li>Mobile App Development</li>
// //                         <li>Custom Software Development</li>
// //                         <li>AI & Machine Learning Solutions</li>
// //                         {/* <li>Data Analytics(Data Warehousing & ETL, BI Dashboards & Reporting)</li> */}
// //                     </ul>
// //                 </div>
// //                 <div className='work-content'>
// //                     <h2>Development & Implementation</h2>
// //                     <ul>
// //                         <li>Website Development</li>
// //                         <li>Mobile App Development</li>
// //                         <li>Custom Software Development</li>
// //                         <li>AI & Machine Learning Solutions</li>
// //                         {/* <li>Data Analytics(Data Warehousing & ETL, BI Dashboards & Reporting)</li> */}
// //                     </ul>
// //                 </div>
// //                 <div></div>
// //                 <div></div>
// //             </div>
// //         </div>


// //     )
// // }



// import React from 'react';
// import './Work.css';

// export default function Work() {
//   return (
//     <div className="work">
//       <div className="work-text">
//         <h2>
//           What We Do <span>Best</span>
//         </h2>
//         <p>
//           End-to-end digital services designed to transform ideas into powerful,
//           scalable,<br />
//           and user-centric solutions.
//         </p>
//       </div>

//       <div className="work-container">
//         {[
//           {
//             title: 'Development & Implementation',
//             items: [
//               'Website Development',
//               'Mobile App Development',
//               'Custom Software Development',
//               'AI & Machine Learning Solutions',
//               'Data & Analytics (Data Warehousing, BI Dashboards & Reporting)',
//             ],
//           },
//           {
//             title: 'Consulting & Staff Augmentation',
//             items: [
//               'IT Staff Augmentation (Developers, QA, DevOps)',
//               'UI/UX Design & Product Strategy',
//               'Digital Transformation (Audits, Roadmaps)',
//             ],
//           },
//           {
//             title: 'E-Commerce Solutions',
//             items: [
//               'Shopify Development',
//               'WooCommerce Development',
//               'Store Migrations & Integrations',
//             ],
//           },
//           {
//             title: 'Digital Marketing Services',
//             items: ['SEO & Analytics', 'Paid Media (PPC & Social Ads)'],
//           },
//         ].map((service, i) => (
//           <div className="work-content" key={i}>
//             <h2>{service.title}</h2>
//             <ul>
//               {service.items.map((item, j) => (
//                 <li key={j}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import './Work.css';

// export default function Work() {
//   return (
//     <div className="work">
//       <div className="work-text">
//         <h2>
//           What We Do <span>Best</span>
//         </h2>
//         <p>
//           End-to-end digital services designed to transform ideas into powerful,
//           scalable,<br />
//           and user-centric solutions.
//         </p>
//       </div>

//       <div className="work-container">
//         <div className="work-content">
//           <h2>Development & Implementation</h2>
//           <ul>
//             <li>Website Development</li>
//             <li>Mobile App Development</li>
//             <li>Custom Software Development</li>
//             <li>AI & Machine Learning Solutions</li>
//             <li>Data & Analytics (Data Warehousing, BI Dashboards & Reporting)</li>
//           </ul>
//         </div>

//         <div className="work-content">
//           <h2>Consulting & Staff Augmentation</h2>
//           <ul>
//             <li>IT Staff Augmentation (Developers, QA, DevOps)</li>
//             <li>UI/UX Design & Product Strategy</li>
//             <li>Digital Transformation (Audits, Roadmaps)</li>
//           </ul>
//         </div>

//         <div className="work-content">
//           <h2>E-Commerce Solutions</h2>
//           <ul>
//             <li>Shopify Development</li>
//             <li>WooCommerce Development</li>
//             <li>Store Migrations & Integrations</li>
//           </ul>
//         </div>

//         <div className="work-content">
//           <h2>Digital Marketing Services</h2>
//           <ul>
//             <li>SEO & Analytics</li>
//             <li>Paid Media (PPC & Social Ads)</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
 
// import React from 'react';
// import './Work.css';

// export default function Work() {
//   return (
//     <div className="work">
//       <div className="work-text">
//         <h2>
//           What We Do <span>Best</span>
//         </h2>
//         <p>
//           End-to-end digital services designed to transform ideas into powerful,
//           scalable,<br />
//           and user-centric solutions.
//         </p>
//       </div>

//       <div className="work-container">
//         <div className="work-card">
//           <h2>Development & Implementation</h2>
//           <ul>
//             <li><a href="#">Website Development</a></li>
//             <li>Mobile App Development</li>
//             <li>Custom Software Development</li>
//             <li>AI & Machine Learning Solutions</li>
//             <li>Data & Analytics (Data Warehousing & ETL, BI Dashboards & Reporting)</li>
//           </ul>
//         </div>

//         <div className="work-card">
//           <h2>Consulting & Staff Augmentation</h2>
//           <ul>
//             <li>IT Staff Augmentation (Developers, QA, DevOps)</li>
//             <li>UI/UX Design & Product Strategy</li>
//             <li>Digital Transformation Consulting (Process Audits, Technology Roadmaps)</li>
//           </ul>
//         </div>

//         <div className="work-cards">
//           <h2>E-Commerce Solutions</h2>
//           <ul>
//             <li>Shopify Development</li>
//             <li>WooCommerce Development</li>
//             <li>Store Migrations & Platform Integrations</li>
//           </ul>
//         </div>

//         <div className="work-cards1">
//           <h2>Digital Marketing Services</h2>
//           <ul>
//             <li>SEO & Analytics</li>
//             <li>Paid Media (PPC & Social Ads)</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import './Work.css';

export default function Work() {
  return (
    <div className="work">
      <div className="work-text">
        <h2>
          What We Do <span>Best</span>
        </h2>
        <p>
          End-to-end digital services designed to transform ideas into powerful,
          scalable,<br />
          and user-centric solutions.
        </p>
      </div>

      <div className="work-container">
        <div className="work-card">
          <h3>Development & Implementation</h3>
          <ul>
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>Custom Software Development</li>
            <li>AI & Machine Learning Solutions</li>
            <li>Data & Analytics (Data Warehousing & ETL, BI Dashboards & Reporting)</li>
          </ul>
        </div>

        <div className="work-card1">
          <h3>Consulting & Staff Augmentation</h3>
          <ul>
            <li>IT Staff Augmentation (Developers, QA, DevOps)</li>
            <li>UI/UX Design & Product Strategy</li>
            <li>Digital Transformation Consulting (Process Audits, Technology Roadmaps)</li>
          </ul>
        </div>

        <div className="work-row">
          <div className="work-card wide">
            <h3>E-Commerce Solutions</h3>
            <ul>
              <li>Shopify Development</li>
              <li>WooCommerce Development</li>
              <li>Store Migrations & Platform Integrations</li>
            </ul>
          </div>

          <div className="work-card narrow">
            <h3>Digital Marketing Services</h3>
            <ul>
              <li>SEO & Analytics</li>
              <li>Paid Media (PPC & Social Ads)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
