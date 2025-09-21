import './OfferShopify.css'

export default function OfferShopify() {
    return (
        <div className='offersShopify'>
        <div className='offerShopify'>
            <h3>What We <span>Offer?</span></h3>
            <div className='shopify-container'>
                <div className='shopify-box'>
                    <div className='box-containers'>
                        <h4>Store Optimization & Conversion Improvements</h4>
                        <p>We improve loading speed, mobile responsiveness, user experience, and checkout flows — turning browsers into buyers.</p>
                    </div>
                </div>
                <div className='shopify-box1'>
                    <div className='box-containers1'>
                        <h4>Shopify Store Setup & Configuration</h4>
                        <p>From product uploads and collections to payment gateways, shipping, and tax settings — we’ll get your store running smoothly and compliantly.</p>
                    </div>
                </div>
                <div className='shopify-box-big'>
                    <div className='box-container-big'>
                        <h4>Shopify App Integration & Custom Features</h4>
                        <p>From product uploads and collections to payment gateways, shipping, and tax settings — we’ll get your store running smoothly and compliantly.</p>
                    </div>
                </div>

                <div className='shopify-box-small'>
                    <div className='box-container-small'>
                        <h4>Custom Store Development</h4>
                        <p>We create stunning, responsive Shopify themes tailored to your brand, audience, and product type — not just cookie-cutter templates.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}