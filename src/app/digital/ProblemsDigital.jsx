import './ProblemsDigital.css'

export default function ProblemsDigital(){
    return(
        <div className='solutions'>
            <p className='solutions-p'>Strategic Benefits That Scale With You</p>
            <h2>Why Digital <span>Transformation Matters</span></h2>

            <div className='solutions-container'>
                <div className='solutions-content'>
                    <div className='solutions-box'>
                        <div className='solutionBox-container'>
                        <div className='solutionBox-content'>
                            <div>
                                <img src="/Group 374.png" width={40} />
                            </div>
                            <div><h4 style={{fontSize:"26px"}}>Eliminate Inefficiencies</h4>
                            </div>
                        </div>
                        <p><b>Solution:</b> Streamline processes with automation and integrated tools to save time and reduce errors.</p>
                    </div>
                    </div>
                    <div className='solutions-box'>
                        <div className='solutionBox-container'>
                        <div className='solutionBox-content'>
                            <div>
                                <img src="/Group 374(15).png" width={40} />
                            </div>
                            <div><h4>Improve Decision-Making</h4>
                            </div>
                        </div>
                        <p><b>Solution:</b>  Unlock real-time insights with connected systems and smarter reporting.</p>
                    </div>
                    </div>
                    <div className='solutions-box'>
                        <div className='solutionBox-container'>
                        <div className='solutionBox-content'>
                            <div>
                                <img src="/Group 374 (16).png" width={40} />
                            </div>
                            <div><h4>Enhance Customer Experience</h4>
                            </div>
                        </div>
                        <p><b>Solution:</b>  Adopt tools that enable personalization, faster response times, and seamless service delivery.</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}