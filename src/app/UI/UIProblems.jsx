import './UIProblems.css'

export default function UIProblems(){
    return(
        <div className='solutions'>
            <p className='solutions-p'>Designs That Solves Real Problems</p>
            <h2>Why UI/UX & Product <span>Strategy Matter</span></h2>

            <div className='solutions-container'>
                <div className='solutions-content'>
                    <div className='solutions-box'>
                        <div className='solutionBox-container'>
                        <div className='solutionBox-content'>
                            <div>
                                <img src="/Group 374(5).png" width={40} />
                            </div>
                            <div><h4>Low Engagement or Conversion Rates</h4>
                            </div>
                        </div>
                        <p><b>Solution:</b> We simplify user journeys, improve accessibility, and make interfaces intuitive to boost retention and conversions.</p>
                    </div>
                    </div>
                    <div className='solutions-box'>
                        <div className='solutionBox-container'>
                        <div className='solutionBox-content'>
                            <div>
                                <img src="/Group 374(4).png" width={40} />
                            </div>
                            <div><h4>Confusing or Cluttered Interfaces</h4>
                            </div>
                        </div>
                        <p><b>Solution:</b> We create clear, focused layouts with meaningful hierarchy to improve usability and reduce bounce rates.</p>
                    </div>
                    </div>
                    <div className='solutions-box'>
                        <div className='solutionBox-container'>
                        <div className='solutionBox-content'>
                            <div>
                                <img src="/Group 374(3).png" width={40} />
                            </div>
                            <div><h4>Disconnected Brand Experience</h4>
                            </div>
                        </div>
                        <p><b>Solution:</b> We build cohesive visual systems and user flows that reflect your brand and build trust with users.</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}