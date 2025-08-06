import Image from 'next/image';
import React from 'react';
import './Projects.css';

export default function Projects() {
    return(
        <div className="projects">
            <div className='projects-text'>
                <h4>OUR WORK ACROSS INDUSTRIES</h4>
                <h1>Crafting High-Impact Websites</h1>
                <div className='project-paragraph'>
                <p>From marketing sites to complex platforms, our web development projects blend performance, responsiveness, and seamless user experience to bring your brand to life online.</p>
                </div>
                <div className='projects-btn'>
                <div className='projects-btn-text'>
                    <p>Website Development</p>
                </div>
                <div className='projects-btn-text'>
                    <p>Mobile App Development & UI/UX Design</p>
                </div>
                <div className='projects-btn-text'>
                    <p>Custom Software Development</p>
                </div>
                </div>
                <div className='projects-img'>
                    <div>
                        <img src="/Img1.png" width={250}/>
                    </div>
                    <div>
                        <img src="/img2.png" width={250} />
                    </div>
                    <div>
                        <img src="/img3.png" width={250} />
                    </div>
                    <div>
                        <img src="/img4.png" width={250} />
                    </div>
                </div>
            </div>
        </div>
    )

}