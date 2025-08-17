import './HeroWebDev.css'
export default function HeroWebDev() {
    return (
        <div className="HeroWebDev">
            <div className="HeroWebDev-container">
                <div className="HeroWebDev-content">
                    <div>
                        <div>
                            <h1>Building High-Performing <br />Websites <span>That Convert</span></h1>
                            <p>We empower businesses to thrive in the digital <br />landscape with end-to-end technology and marketing <br /> solutions. </p> <br />
                            <button className='btn1'>Getting Started</button>
                            <button className='btn2'>Our Work</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/Group 143.png" alt="Cube" width={490} height={421} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}