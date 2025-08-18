import './Offering.css'

export default function Offering() {
    return (
        <div className='offering'>
            <h1>What We Offer</h1>
            <p className='offering-p'>Whether you're launching, growing, or rebranding, we’ve got the tools and expertise to help you succeed online.</p>
            <div className='offering-container'>
                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                        <div className='box-content'>
                            <img src="/Group 93.png" width={30}/>
                            <h5>Website Development</h5>
                        </div>
                        <div className='box-p'>
                        <p>From simple business sites to complex custom builds,  we create scalable, SEO-friendly WordPress websites using Elementor, Gutenberg, or custom themes.</p>
                    </div>
                    </div>
                    </div>
                </div>
                
                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                        <div className='box-content'>
                            <img src="/Group 93 (5).png" width={30}/>
                            <h5>Web Applications</h5>
                        </div>
                        <div className='box-p'>
                        <p>Sell with confidence using our custom Shopify or WooCommerce store builds, complete with optimized product pages, secure checkout, and mobile-first design.</p>
                    </div>
                    </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                        <div className='box-content'>
                            <img src="/Group 93 (1).png" width={30}/>
                            <h5>Custom Website Design</h5>
                        </div>
                        <div className='box-p'>
                        <p>Tailored, responsive designs that reflect your brand identity and provide a seamless experience across all devices.</p>
                    </div>
                    </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                        <div className='box-content'>
                            <img src="/Group 93 (2).png" width={30}/>
                            <h5>Landing Page Design</h5>
                        </div>
                        <div className='box-p'>
                        <p>High-converting landing pages for lead generation, ads, product launches, and more, designed with performance and clarity in mind.</p>
                    </div>
                    </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                        <div className='box-content'>
                            <img src="/Group 93 (3).png" width={30}/>
                            <h5>Webflow & Wix Websites</h5>
                        </div>
                        <div className='box-p'>
                        <p>Need fast turnaround with flexibility? We build modern, sleek websites using no-code tools like Webflow and Wix without compromising quality.</p>
                    </div>
                    </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                        <div className='box-content'>
                            <img src="/Group 93 (4).png" width={30}/>
                            <h5>Maintenance & Support</h5>
                        </div>
                        <div className='box-p'>
                        <p>Post-launch support, updates, bug fixes, and improvements to keep your site running smoothly as your business grows.</p>
                    </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}