import './Comments.css';
import React from 'react';
export default function Comments() {
    return (
        <div className='comments'>
            <div className='comments-container'>
                <div>
                    <h2>What Our Client Said About Us </h2>
                </div>
                <div className='comments-text'>
                    <div className='comments-text1'>
                        &larr;
                    </div>
                    <div className='comments-text1'>
                        &rarr;
                    </div>
                </div>


            </div>
            <div className='comments-content'>
                <div style={{backgroundColor:"#5454E8", color:"#fff"}} className='comments-content1'>
                    <div className='comments-content1-text'>
                        <div>
                            <img src="/Ellipse 80.png" alt="Comment 1" />
                        </div>
                        <div>
                            <h3>Amelia Joseph</h3>
                            <p>Chief Manager</p>
                        </div>
                    </div>
                    <div className='comments-content1-text2'>
                        <p>My vision came alive effortlessly. Their blend of <br /> casual and professional approach made the <br /> process a breeze. Creativity flowed, and the <br /> results were beyond my expectations.</p>
                    </div>
                </div>

                <div style={{backgroundColor:"#fff",color:"#000"}} className='comments-content1'>
                    <div className='comments-content1-text'>
                        <div>
                            <img src="/Ellipse 80.png" alt="Comment 1" />
                        </div>
                        <div>
                            <h3>Amelia Joseph</h3>
                            <p>Chief Manager</p>
                        </div>
                    </div>
                    <div className='comments-content1-text2'>
                        <p style={{color:"#000"}}>My vision came alive effortlessly. Their blend of <br /> casual and professional approach made the <br /> process a breeze. Creativity flowed, and the <br /> results were beyond my expectations.</p>
                    </div>
                </div>

                <div style={{backgroundColor:"#fff",color:"#000"}} className='comments-content1'>
                    <div className='comments-content1-text'>
                        <div>
                            <img src="/Ellipse 80.png" alt="Comment 1" />
                        </div>
                        <div>
                            <h3>Amelia Joseph</h3>
                            <p>Chief Manager</p>
                        </div>
                    </div>
                    <div className='comments-content1-text2'>
                        <p style={{color:"#000"}}>My vision came alive effortlessly. Their blend of <br /> casual and professional approach made the <br /> process a breeze. Creativity flowed, and the <br /> results were beyond my expectations.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}