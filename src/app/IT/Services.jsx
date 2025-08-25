import './Services.css'

export default function Services() {
    return (
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
                                <h4>Developers (Frontend & Backend)</h4>
                            </div>
                        </div>
                        <div>
                            <p className='services-p'>Access expert engineers skilled in React, Angular, Vue.js, Node.js, Python, PHP, and more — ready to plug into your stack and deliver high-quality code fast.</p>
                        </div>
                        <div className='services-img1'>
                            <div>
                                <img src="/Group 375 (1).png" alt="" />
                            </div>

                            <div>
                                <h4>QA Engineers</h4>
                            </div>
                        </div>
                        <div>
                            <p className='services-p'>Manual and automation testing experts ensure your product is stable, bug-free, and meets the highest quality standards before launch.</p>
                        </div>
                        <div className='services-img2'>
                        <div>
                            <img src="/Group 375 (2).png" alt="" />
                        </div>
                        
                            <div>
                            <h4>DevOps & Cloud Specialists</h4>
                            </div>
                            </div>
                            <div>
                            <p className='services-p'>From CI/CD to AWS, Azure, Docker, and Kubernetes — our DevOps professionals streamline your infrastructure, deployment, and scalability.</p>
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