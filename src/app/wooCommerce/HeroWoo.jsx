import './HeroWoo.css'

export default function HeroWoo(){
    return(
        <div className="HeroWebDev">
            <div className="HeroWebDev-container">
                <div className="HeroWebDev-content">
                    <div>
                        <div>
                            <h1 className='woo-h1'>Power, Flexible eCommerce <span>with WooCommerce</span></h1>
                            <p className='woo-p'>We empower businesses to thrive in the digital landscape with end-to-end technology and marketing solutions. </p>
                            <button className='btn1'>Getting Started</button>
                            <button className='btn2'>Our Work</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/Frames(13).png" alt="Cube" width={490} height={421} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}