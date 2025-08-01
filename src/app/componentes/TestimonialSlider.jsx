// import './Comments.css';
// import React from 'react';
// export default function Comments() {
//     return (
//         <div className='comments'>
//             <div className='comments-container'>
//                 <div>
//                     <h2>What Our Client Said About Us </h2>
//                 </div>
//                 <div className='comments-text'>
//                     <div className='comments-text1'>
//                         <img src="/right arrow (1).png" alt="" />
//                     </div>
//                     <div className='comments-text1'>
//                         <img src="/right arrow (2).png" alt="" />
//                     </div>
//                 </div>


//             </div>
//             <div className='comments-content'>
//                 <div style={{backgroundColor:"#5454E8", color:"#fff"}} className='comments-content1'>
//                     <div className='comments-content1-text'>
//                         <div>
//                             <img src="/Ellipse 80.png" alt="Comment 1" />
//                         </div>
//                         <div>
//                             <h3>Amelia Joseph</h3>
//                             <p>Chief Manager</p>
//                         </div>
//                     </div>
//                     <div className='comments-content1-text2'>
//                         <p>My vision came alive effortlessly. Their blend of <br /> casual and professional approach made the <br /> process a breeze. Creativity flowed, and the <br /> results were beyond my expectations.</p>
//                     </div>
//                 </div>

//                 <div style={{backgroundColor:"#fff",color:"#000"}} className='comments-content1'>
//                     <div className='comments-content1-text'>
//                         <div>
//                             <img src="/Ellipse 80.png" alt="Comment 1" />
//                         </div>
//                         <div>
//                             <h3>Amelia Joseph</h3>
//                             <p>Chief Manager</p>
//                         </div>
//                     </div>
//                     <div className='comments-content1-text2'>
//                         <p style={{color:"#000"}}>My vision came alive effortlessly. Their blend of <br /> casual and professional approach made the <br /> process a breeze. Creativity flowed, and the <br /> results were beyond my expectations.</p>
//                     </div>
//                 </div>

//                 <div style={{backgroundColor:"#fff",color:"#000"}} className='comments-content1'>
//                     <div className='comments-content1-text'>
//                         <div>
//                             <img src="/Ellipse 80.png" alt="Comment 1" />
//                         </div>
//                         <div>
//                             <h3>Amelia Joseph</h3>
//                             <p>Chief Manager</p>
//                         </div>
//                     </div>
//                     <div className='comments-content1-text2'>
//                         <p style={{color:"#000"}}>My vision came alive effortlessly. Their blend of <br /> casual and professional approach made the <br /> process a breeze. Creativity flowed, and the <br /> results were beyond my expectations.</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }
// 'use client';

// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import Image from 'next/image';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './TestimonialSlider.css';

// const TestimonialSlider = () => {
//   const sliderRef = useRef(null);

//   const goNext = () => sliderRef.current?.slickNext();
//   const goPrev = () => sliderRef.current?.slickPrev();

//   const settings = {
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="testimonial-container">
//       <div className="testimonial-header">
//         <h2>What Our Client Said About Us</h2>
//         <div className="testimonial-arrows">
//           <button onClick={goPrev}>&#8592;</button>
//           <button onClick={goNext}>&#8594;</button>
//         </div>
//       </div>

//       <Slider {...settings} ref={sliderRef}>
//         {/* Testimonial 1 */}
//         <div className="testimonial-card">
//           <Image
//             src="/Ellipse 80.png"
//             alt="Amelia Joseph"
//             width={60}
//             height={60}
//             className="testimonial-image"
//           />
//           <h3>Amelia Joseph</h3>
//           <p className="title">Chief Manager</p>
//           <p className="message">
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet erat quis sapien iaculis bibendum."
//           </p>
//         </div>

//         {/* Testimonial 2 */}
//         <div className="testimonial-card">
//           <Image
//             src="/Ellipse 80.png"
//             alt="Amelia Joseph"
//             width={60}
//             height={60}
//             className="testimonial-image"
//           />
//           <h3>Amelia Joseph</h3>
//           <p className="title">Chief Manager</p>
//           <p className="message">
//             "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
//           </p>
//         </div>

//         {/* Testimonial 3 */}
//         <div className="testimonial-card">
//           <Image
//             src="/Ellipse 80.png"
//             alt="Amelia Joseph"
//             width={60}
//             height={60}
//             className="testimonial-image"
//           />
//           <h3>Amelia Joseph</h3>
//           <p className="title">Chief Manager</p>
//           <p className="message">
//             "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//           </p>
//         </div>

//         {/* Testimonial 4 */}
//         <div className="testimonial-card">
//           <Image
//             src="/Ellipse 80.png"
//             alt="Amelia Joseph"
//             width={60}
//             height={60}
//             className="testimonial-image"
//           />
//           <h3>Amelia Joseph</h3>
//           <p className="title">Chief Manager</p>
//           <p className="message">
//             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
//           </p>
//         </div>

//       </Slider>
//     </div>
//   );
// };

// export default TestimonialSlider;



'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  const goNext = () => sliderRef.current?.slickNext();
  const goPrev = () => sliderRef.current?.slickPrev();

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='testimonial-slider'>
    <div className="testimonial-wrapper">
      <div className="testimonial-header">
        <h2>What Our Client Said About Us</h2>
        <div className="testimonial-arrows">
          <button onClick={goPrev}>&#8592;</button>
          <button onClick={goNext}>&#8594;</button>
        </div>
      </div>

      <div className="testimonial-carousel">
        <Slider {...settings} ref={sliderRef}>
          {/* Card 1 */}
          <div className="testimonial-card">
            <div className="testimonial-inner">
              <div className="top-section">
                <img src="/Ellipse 80.png" alt="Amelia Joseph" />
                <div className="name-title">
                  <h3>Amelia Joseph</h3>
                  <p className="title">Chief Manager</p>
                </div>
              </div>
              <p className="testimonial-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="testimonial-card">
            <div className="testimonial-inner">
              <div className="top-section">
                <img src="/Ellipse 80.png" alt="Amelia Joseph" />
                <div className="name-title">
                  <h3>Amelia Joseph</h3>
                  <p className="title">Chief Manager</p>
                </div>
              </div>
              <p className="testimonial-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="testimonial-card">
            <div className="testimonial-inner">
              <div className="top-section">
                <img src="/Ellipse 80.png" alt="Amelia Joseph" />
                <div className="name-title">
                  <h3>Amelia Joseph</h3>
                  <p className="title">Chief Manager</p>
                </div>
              </div>
              <p className="testimonial-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="testimonial-card">
            <div className="testimonial-inner">
              <div className="top-section">
                <img src="/Ellipse 80.png" alt="Amelia Joseph" />
                <div className="name-title">
                  <h3>Amelia Joseph</h3>
                  <p className="title">Chief Manager</p>
                </div>
              </div>
              <p className="testimonial-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

        </Slider>
      </div>
    </div>
    </div>
  );
};

export default TestimonialSlider;
