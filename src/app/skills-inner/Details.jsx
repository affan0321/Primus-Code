"use client"
import { useEffect, useState } from "react";
import './Details.css'
export default function Details() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 150);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={`details ${isVisible ? "show" : ""}`}>
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