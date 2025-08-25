// import React from 'react';
// import './Hero.css';
// import Image from 'next/image';
// export default function Home() {
//     return (
//         <div className="hero">
//             <div className="container">
//                 <div className='hero-content'>
//                     <div>
//                         <div>
//                             <h1>Crafting Digital Solutions <br />That <span>Drive Growth</span></h1>
//                             <p>We empower businesses to thrive in the digital <br />landscape with end-to-end technology and marketing <br /> solutions. </p> <br />
//                             <button className='btn1'>Getting Started</button>
//                             <button className='btn2'>Our Work</button>
//                         </div>
//                     </div>
//                     <div>
//                         <div>
//                             <Image src="/a.png" alt="Cube" width={490} height={421} />
//                             </div>                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React from 'react';
import './Hero.css';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="hero">
            {/* Animated Lines */}
            <div className="hero-lines">
                {/* Vertical lines */}
                <div className="v-line" style={{ left: "20%", animationDelay: "0s" }} />
                <div className="v-line" style={{ left: "40%", animationDelay: "2s" }} />
                <div className="v-line" style={{ left: "60%", animationDelay: "4s" }} />
                <div className="v-line" style={{ left: "80%", animationDelay: "6s" }} />

                {/* Horizontal lines */}
                <div className="h-line" style={{ top: "30%", animationDelay: "1s" }} />
                <div className="h-line" style={{ top: "50%", animationDelay: "3s" }} />
                <div className="h-line" style={{ top: "70%", animationDelay: "5s" }} />
            </div>


            <div className="container">
                <div className='hero-content'>
                    <div>
                        <div>
                            <h1>Crafting Digital Solutions <br />That <span>Drive Growth</span></h1>
                            <p>We empower businesses to thrive in the digital <br />landscape with end-to-end technology and marketing <br /> solutions. </p> <br />
                            <button className='btn1'>Getting Started</button>
                            <button className='btn2'>Our Work</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src="/a.png" alt="Cube" width={490} height={421} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
