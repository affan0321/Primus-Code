import './HeroPaid.css'

export default function HeroPaid(){
    return(
        <div className="heroMobDev">
            <div className="heroMobDev-container">
                <div className="heroMobDev-content">
                    <div>
                        <div>
                    <h1 style={{color:"#1C2F58FC"}}>Paid Media Campaigns <br /><span style={{color:"#5454E8"}}>That Convert</span></h1>
                    <p style={{color:"#1C2F58FC"}}>We don’t guess — we measure, optimize, and grow. Our SEO and analytics  <br />services are built to increase your visibility, boost traffic, and help you <br /> understand what works. </p> <br />
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