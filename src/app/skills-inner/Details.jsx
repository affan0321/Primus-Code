import './Details.css'
export default function Details() {
    return (
        <div className="details">
            <div className="details-container">
                <div className='box'>
                    <div className='box-content'>
                    <h4>Client</h4>
                    <p>NovaMed Logistics:  A mid-sized healthcare supply chain distributor operating across Southeast Asia, managing over 200 hospitals and clinics.</p>
                    </div>
                </div>
                <div className='box1'>
                    <div className='box1-content'>
                    <h4>Service Provided</h4>
                    <p>Data Warehousing & ETL (Part of Primus Code's Data & Analytics Services)</p>
                </div>
                </div>
                <div className='box2'>
                    <div className='box2-content'>
                    <h4>Tools & Technologies</h4>
                    <p>Snowflake,Aws Glue,Apache Airflow,Sql,PowerBI,Python</p>
                </div>
                </div>
            </div>
        </div>
    )
}