import './HeroShopify.css'
export default function HeroShopify(){
    return(
        <div className="HeroWebDev">
            <div className="HeroWebDev-container">
                <div className="HeroWebDev-content">
                    <div>
                        <div>
                            <h1>Custom Shopify Development<br />to <span>Grow Your Online Store</span></h1>
                            <p>We empower businesses to thrive in the digital <br />landscape with end-to-end technology and marketing <br /> solutions. </p> <br />
                            <button className='btn1'>Getting Started</button>
                            <button className='btn2'>Our Work</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/Frames(16).png" alt="Cube" width={490} height={421} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}