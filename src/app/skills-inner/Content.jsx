"use client"
import './Content.css'
import { useEffect } from 'react';
export default function Content() {
     useEffect(() => {
        const elements = document.querySelectorAll('.animate');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(entry.target.dataset.animate);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        elements.forEach(el => observer.observe(el));
    }, []);
    return (
        <div className='content'>
            <h1 className="animate" data-animate="fade-up">The Challenge</h1>
            <p className="animate" data-animate="fade-up">NovaMed had grown rapidly over five years but was held back by fragmented data systems, scattered across multiple on-premise and cloud applications. Their analytics were sluggish, reports were inconsistent, and the executive team struggled to access real-time operational visibility.  Daily reporting relied on Excel sheets extracted from legacy ERP systems, leading to data redundancy, late decision-making, and minimal forecasting power. The company wanted to modernize its analytics architecture and introduce a unified data warehouse that could scale with them.</p>
            <h1 className="animate" data-animate="fade-up">Our Approach</h1>
            <p className="animate" data-animate="fade-up">Primus Code’s Data & Analytics team partnered closely with NovaMed to understand every facet of their operational data.</p>
            <h1 className="animate" data-animate="fade-up">Key Steps</h1>
            <ul className="animate" data-animate="fade-left">
                <li>Data Audit & Mapping: Identified all data sources — ERP, CRM, inventory systems, and third-party logistics APIs.</li>
                <li>ETL Pipeline Implementation: Built robust pipelines using Apache Airflow and AWS Glue for real-time ingestion and transformation.</li>
                <li>Data Warehouse Architecture: Deployed a scalable, cloud-native Snowflake data warehouse with integrated access controls and query optimization.</li>
                <li>BI Integration: Connected the warehouse with Power BI dashboards customized for Operations, Finance, and C-Suite.</li>
                <li>Training & Handover: Provided documentation, admin training, and a monitoring dashboard for internal IT teams.</li>
            </ul>
            <div className='content-img'>
                <div className="animate" data-animate="fade-left">
                    <img src="/Rectangle 161.png" width={500} />
                </div>
                <div className="animate" data-animate="fade-right">
                    <img src="/Rectangle 160.png" width={500} height={230} />
                </div>
            </div>
            <h1 className="animate" data-animate="fade-up">The Result</h1>
            <p className="animate" data-animate="fade-up">Within 10 weeks, NovaMed went from disconnected spreadsheets to centralized, actionable intelligence.</p>
            <h1 className="animate" data-animate="fade-up">Impact Highlight</h1>
            <p className="animate" data-animate="fade-left">📊 80% Reduction in manual reporting effort.</p>
            <p className="animate" data-animate="fade-left">⚡ Real-time dashboards accessible to over 60 users across departments.</p>
            <p className="animate" data-animate="fade-left">🔄 ETL cycle reduced from 8 hours to under 1 hour.</p>
            <p className="animate" data-animate="fade-left">💡 Enabled predictive analytics for inventory restocking and vendor performance.</p>

            <div className='content-ceo animate' data-animate="fade-up">
                <p style={{color:"black"}}>“The Primus Code team transformed how we see and use data. From static to strategic — our entire decision-making process is now backed by real-time insights.”</p>
                <p style={{ fontWeight: "bold", marginTop: "10px" }}>— Faisal Khan, COO, NovaMed Logistics</p>
            </div>
            <h1 className="animate" data-animate="fade-up">Conclusion</h1>
            <p className="animate" data-animate="fade-up">Primus Code’s Data Warehousing solution didn’t just integrate NovaMed’s data — it redefined how the company operates. From logistics forecasting to executive reporting, the client now benefits from an agile, scalable, and intelligent data architecture ready for future growth.</p>
            <h1 className="animate" data-animate="fade-up">Related Projects</h1>
                <div className="card-container1">
                <div className="card animate" data-animate="fade-up">
                    <img src="/Rectangle 452 (8).png" />
                    <div className="card-body">
                        <h3 className="card-title">Strategy</h3>
                        <p className="card-price">5-minute team building activities for virtual and hybrid squads</p>

                    </div>
                </div>
                <div className="card animate" data-animate="fade-up">
                    <img src="/Rectangle 452 (9).png" />
                    <div className="card-body">
                        <h3 className="card-title">Strategy</h3>
                        <p className="card-price">5-minute team building activities for virtual and hybrid squads</p>

                    </div>
                </div>
                <div className="card animate" data-animate="fade-up">
                    <img src="/Rectangle 452 (10).png" />
                    <div className="card-body">
                        <h3 className="card-title">Strategy</h3>
                        <p className="card-price">5-minute team building activities for virtual and hybrid squads</p>
                    </div>
                </div>
            </div>
        </div>
    )
}