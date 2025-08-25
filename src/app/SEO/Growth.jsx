import './Growth.css'

export default function Growth() {
    return (
        <div className='growth'>
            <p className='growth-p'>Why You Need SEO</p>
            <h2>Why SEO Is Essential For <span>Online Growth</span></h2>
            <div className='growth-container'>
                <div className='growth-content'>
                    <div className='growth-card'>
                    <div className='growth-img'>
                        <div>
                            <img src="/Group 374.png" width={40} />
                        </div>
                        <div>
                            <h4>Organic Visibility = Free, Targeted Traffic</h4>
                        </div>
                    </div>
                    <div>
                        <p className='growthCard-p'>Good SEO helps your website appear in front of people already searching for what you offer — bringing in high-intent visitors without paying for every click.</p>
                    </div>
                    </div>
                </div>

                <div className='growth-content'>
                    <div className='growth-card'>
                    <div className='growth-img'>
                        <div>
                            <img src="/Group 376.png" width={40} />
                        </div>
                        <div>
                            <h4>Builds Trust and Credibility</h4>
                        </div>
                    </div>
                    <div>
                        <p className='growthCard-p'>Ranking high in search results, having a fast and secure site, and providing helpful content all signal to users (and Google) that you’re a trusted authority.</p>
                    </div>
                    </div>
                </div>

                <div className='growth-content'>
                    <div className='growth-card'>
                    <div className='growth-img'>
                        <div>
                            <img src="/Group 376 (1).png" width={40} />
                        </div>
                        <div>
                            <h4>Long-Term ROI and Sustainability</h4>
                        </div>
                    </div>
                    <div>
                        <p className='growthCard-p'>Unlike paid ads that stop when the budget runs out, SEO keeps working over time — delivering consistent traffic, leads, and sales with compounding returns.</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}