import './DataOffer.css'

export default function DataOffer(){
    return(
        <div className='offers'>
            <h2>What We Offer</h2>
            <p className='offers-p'>Whether you're launching, growing, or rebranding, we’ve got the tools and expertise to help you succeed online.</p>
            <div className='offering-container'>
                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                            <div className='box-content'>
                                <img src="/Group 93.png" width={30} />
                                <h5>Business Intelligence Dashboards</h5>
                            </div>
                            <div className='box-p'>
                                <p>Get interactive, real-time dashboards using tools like Power BI, Tableau, or Looker to monitor KPIs, performance metrics, and trends.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                            <div className='box-content'>
                                <img src="/Group 93 (5).png" width={30} />
                                <h5>Data Warehousing</h5>
                            </div>
                            <div className='box-p'>
                                <p>We design and implement scalable, centralized storage solutions so your data is unified, organized, and query-ready — whether from CRM, web, or custom platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                            <div className='box-content'>
                                <img src="/Group 93 (1).png" width={30} />
                                <h5>ETL Pipelines</h5>
                            </div>
                            <div className='box-p'>
                                <p>Automate the collection and transformation of data from multiple sources into clean, usable formats — reducing manual work and improving accuracy.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                            <div className='box-content'>
                                <img src="/Group 93 (2).png" width={30} />
                                <h5>Report & Data Visualization</h5>
                            </div>
                            <div className='box-p'>
                                <p>Turn complex data into clear visual stories. We create automated reports & visual dashboards for leadership, marketing, ops, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                            <div className='box-content'>
                                <img src="/Group 93 (3).png" width={30} />
                                <h5>Data Governance & Quality Audits</h5>
                            </div>
                            <div className='box-p'>
                                <p>Ensure your data is clean, compliant, and consistent. We implement rules and checks to maintain accuracy and regulatory alignment.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='box-container'>
                        <div className='box-size'>
                            <div className='box-content'>
                                <img src="/Group 93 (4).png" width={30} />
                                <h5>Post Launch Support & Maintenance</h5>
                            </div>
                            <div className='box-p'>
                                <p>Our work doesn’t stop at launch. We monitor, update, and enhance your software to grow as your needs evolve.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}