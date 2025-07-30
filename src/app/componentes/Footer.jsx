import React from 'react';
import './Footer.css';
export default function Footer() {
    return(
        <>
        <div className='footer'>
            <div className='footer-content'>
            <div>
                <h4>PRIMUS <br /> CODE</h4>
                <div className='social-icons'>
                    <div>
                        <img src="/instagram.png" width={20}/>
                    </div>
                    <div>
                        <img src="/twitter.png" width={20} />
                    </div>
                    <div>
                        <img src="/facebook.png" width={20} />
                    </div>
                </div>
            </div>
            <div className='footer-links'>
                <div>
                    <ul>
                        <li>About Us</li>
                        <li>Our Work</li>
                        <li>Contact Us</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div>
                    <p>Email: info@primuscode.com</p>
                    <p>Phone: 111-222-1212</p>
                    <p>Address: 111-222-1212</p>
                </div>
            </div>
            </div>
            
        </div>
        <div className='footer-bottom'>
                <div className='footer-bottom-text'>
                <div><p>© 2022 Embrace, Inc. - All Rights Reserved</p></div>
                <div className='footer-bottom-links'>
                    <div><p>Terms of use</p></div>
                    <div><p>Privacy Policy</p></div>
                </div>
                </div>
            </div>
            </>
    )
}  