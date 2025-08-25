import './Campaign.css'

export default function Campaign(){
    return(
        <div className='growth'>
            <p className='growth-p'>Results You Can Measure</p>
            <h2>Why Paid Media Campaigns<span>Matter</span></h2>
            <div className='growth-container'>
                <div className='growth-content'>
                    <div className='growth-cards'>
                    <div className='growth-img'>
                        <div>
                            <img src="/Group 374.png" width={40} />
                        </div>
                        <div>
                            <h4>Immediate Visibility</h4>
                        </div>
                    </div>
                    <div>
                        <p className='growthCard-p'>Your brand gets in front of thousands of potential customers the moment your ads go live — no waiting for SEO.</p>
                    </div>
                    </div>
                </div>

                <div className='growth-content'>
                    <div className='growth-cards'>
                    <div className='growth-img'>
                        <div>
                            <img src="/Group 379.png" width={40} />
                        </div>
                        <div>
                            <h4>Targeted Reach</h4>
                        </div>
                    </div>
                    <div>
                        <p className='growthCard-p'>Serve ads to the right audience, in the right place, at the right time — based on interests, behaviors, and intent.</p>
                    </div>
                    </div>
                </div>

                <div className='growth-content'>
                    <div className='growth-cards'>
                    <div className='growth-img'>
                        <div>
                            <img src="/Group 378 (1).png" width={40} />
                        </div>
                        <div>
                            <h4>Budget Control</h4>
                        </div>
                    </div>
                    <div>
                        <p className='growthCard-p'>Set daily or lifetime budgets that match your goals. We maximize ROI with data-led decisions and performance insights.</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}