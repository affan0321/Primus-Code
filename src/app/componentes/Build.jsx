import './Build.css';
import React from 'react';
export default function Build() {
    return(
        <div className="build-container">
            <div className="build-header">
            <div className='build-header-text'>
                <h3 style={{marginTop:"40px"}}>Build Something Brilliant <span>Together</span></h3>
                <p>Have an idea, project, or question? We’d love to hear from you. Reach out and our team <br /> will get back to you within 24 hours.</p>
                <img src="/Group1.png" alt="" />
            </div>
            </div>
            <div className="build-form">
                <form className='form'>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="       Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" placeholder="        Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Phone Number</label>
                        <input type="email" id="email" placeholder="         Phone Number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="     Message"></textarea>
                    </div>
                    <p className='btn8'>Submit</p>
                </form>
        </div>
        </div>
    )
}