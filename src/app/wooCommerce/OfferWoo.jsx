import './OfferWoo.css'

export default function OfferWoo() {
    return (
        <div className='offersShopify'>
            <div className='offerShopify'>
                <h3 style={{paddingBottom:"30px"}}>What We <span>Offer?</span></h3>
                <div className='shopify-container'>
                    <div className='shopify-box'>
                        <div className='box-containers'>
                            <h4>Custom Store Setup & Design</h4>
                            <p>We create fully responsive, mobile-optimized designs that reflect your brand identity and maximize conversions.</p>
                        </div>
                    </div>
                    <div className='shopify-box1'>
                        <div className='box-containers1'>
                            <h4>Product & Order Management Setup</h4>
                            <p>We streamline your catalog structure, product variations, inventory control, and order flow for an intuitive backend experience.</p>
                        </div>
                    </div>
                    <div className='shopify-box-big'>
                        <div className='box-container-big'>
                            <h4>Performance Optimization & Security</h4>
                            <p>Speed and trust matter. We optimize your WooCommerce store for fast loading, secure transactions, and smooth performance across devices.</p>
                        </div>
                    </div>

                    <div className='shopify-box-small'>
                        <div className='box-container-small'>
                            <h4>WooCommerce Plugin Integration</h4>
                            <p>Need subscriptions, bookings, bundles, or advanced shipping options? We integrate and configure trusted plugins to meet your business needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}