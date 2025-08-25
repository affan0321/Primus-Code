import './HeroMobDev.css'
export default function HeroMobDev() {
    return (
        <div className="heroMobDev">
            <div className="heroMobDev-container">
                <div className="heroMobDev-content">
                    <div>
                        <div>
                    <h1>Turning Bold Ideas into <br /><span>Powerful Mobile Experiences</span></h1>
                    <p>We empower businesses to thrive in the digital <br />landscape with end-to-end technology and marketing <br /> solutions. </p> <br />
                    <button className='btn1'>Getting Started</button>
                    <button className='btn2'>Our Work</button>
                    </div>
                </div>
                <div>
                        <div>
                            <img src="/Frames.png" alt="Cube" width={490} height={421} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}