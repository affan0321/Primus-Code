import './OfferStore.css'

export default function OfferStore(){
    return(
        <div className='offersShopify'>
        <div className='offerShopify'>
            <h3>What We <span>Offer?</span></h3>
            <div className='shopify-container'>
                <div className='shopify-box'>
                    <div className='box-containers'>
                        <h4>Store-to-Store Migrations</h4>
                        <p>Move from platforms like Shopify, Wix, Magento, or Squarespace to WooCommerce or Shopify — with all your data, products, orders, customers, and SEO intact.</p>
                    </div>
                </div>
                <div className='shopify-box'>
                    <div className='box-containers'>
                        <h4>Custom API & Middleware Solutions</h4>
                        <p>Need something unique? We develop custom scripts and middleware to bridge APIs or sync data across tools and platforms.</p>
                    </div>
                </div>
                <div className='shopify-box-big'>
                    <div className='box-container-big'>
                        <h4>Platform Consultation & Compatibility Checks</h4>
                        <p>We assess your current and future platform needs to recommend the right tech stack and integrations for scale and efficiency.</p>
                    </div>
                </div>

                <div className='shopify-box-small'>
                    <div className='box-container-small'>
                        <h4>Third-Party Tool Integrations</h4>
                        <p>Connect your store to CRMs (like HubSpot), inventory managers, email platforms (like Mailchimp/Klaviyo), ERPs, and payment systems for smarter automation.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}