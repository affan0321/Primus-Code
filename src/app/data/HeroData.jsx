import './HeroData.css'

export default function HeroData() {
    return (
        <div className="heroMobDev">
            <div className="heroMobDev-container">
                <div className="heroMobDev-content">
                    <div>
                        <div>
                            <h1 className='datah1'>Unlock Actionable Insights <span style={{ color: "#25ffa9" }}>From Your Data</span></h1>
                            <p className='datap'>We empower businesses to thrive in the digital landscape with end-to-end technology and marketing solutions. </p>
                            <button className='btn1'>Getting Started</button>
                            <button className='btn2'>Our Work</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/Group 143(3).png" alt="Cube" width={490} height={421} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}