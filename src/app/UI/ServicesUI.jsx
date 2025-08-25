import './ServicesUI.css'

export default function ServicesUI(){
    return(
        <>
         <div className='services'>
            </div>
            <div className='services-container'>
                <div className='services-content'>
                    <div>
                        <h2>What We <span>Offer</span></h2>
                        <div className='services-img'>
                            <div>
                                <img src="/Group 375.png" alt="" />
                            </div>
                            <div>
                                <h4>UI/UX Design for Web & Mobile</h4>
                            </div>
                        </div>
                        <div>
                            <p className='services-p'>From wireframes to polished interfaces — we design responsive, accessible, and visually stunning user interfaces for websites, apps, and SaaS platforms.</p>
                        </div>
                        <div className='services-img1'>
                            <div>
                                <img src="/Group 375 (1).png" alt="" />
                            </div>

                            <div>
                                <h4>UX Research & User Testing</h4>
                            </div>
                        </div>
                        <div>
                            <p className='services-p'>We dive deep into user behavior through interviews, surveys, and usability testing to inform design decisions and eliminate guesswork.</p>
                        </div>
                        <div className='services-img2'>
                        <div>
                            <img src="/Group 375 (2).png" alt="" />
                        </div>
                        
                            <div>
                            <h4>Design Systems & Component Libraries</h4>
                            </div>
                            </div>
                            <div>
                            <p className='services-p'>We create scalable, reusable design systems for consistent branding and faster development — perfect for growing product teams.</p>
                        </div>
                    </div>
                    <div>
                        <img src="Frames (13).png" width={400} height={500}/>
                    </div>
                </div>
            </div>

        </>
    )
}