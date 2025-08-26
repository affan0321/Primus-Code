import React from 'react';
import './Company.css';
export default function Company() {
    return(
        <div className='company'>
            <div className='img-container'>
                <div className='img-text'>
                <h3>REX Inc</h3>
                <p>Website Development</p>
                </div>
            </div>
            <div className='text-container'>
                <h2>Our Work <span>Speaks For Itself</span></h2>
                <p>See How We’ve Helped Brands Transform <br /> Their Digital Presence</p>
                <p className='btn6'>Our Work</p>
            </div>
            <div className='img-container1'>
                <div className='img-text'>
                <h3>REX Inc</h3>
                <p>Custom Software Development</p>
                </div>
            </div>
            <div className='img-container2'>
                <div className='img-text'>
                <h3>REX Inc</h3>
                <p>AI & Machine Learning Solutions</p>
                </div>
            </div>
            <div className='img-container3'>
                <div className='img-text'>
                <h3>REX Inc</h3>
                <p>SEO & Paid Ads</p>
                </div>
            </div>
            <div className='img-container4'>
                <div className='img-text'>
                <h3>REX Inc</h3>
                <p>Mobile Application Development</p>
                </div>
            </div>
        </div>
    )
}