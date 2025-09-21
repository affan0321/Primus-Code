import './HeroShopify.css'
export default function HeroShopify(){
    return(
        <div className="HeroWebDev">
            <div className="HeroWebDev-container">
                <div className="HeroWebDev-content">
                    <div>
                        <div>
                            <h1 className = "shopify-h1">Custom Shopify Development to <span>Grow Your Online Store</span></h1>
                            <p className = "shopify-p" >We empower businesses to thrive in the digital landscape with end-to-end technology and marketing solutions. </p>
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