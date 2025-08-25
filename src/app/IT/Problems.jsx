import './Problems.css'

export default function Problems(){
    return(
        <div className='solutions'>
            <p className='solutions-p'>Real Problems, Real Solutions</p>
            <h2>Why Buisnesses Choose <span>IT Staff Augmentation</span></h2>

            <div className='solutions-container'>
                <div className='solutions-content'>
                    <div className='solutions-box'>
                        <div className='solutionBox-container'>
                        <div className='solutionBox-content'>
                            <div>
                                <img src="/Group 374.png" width={40} />
                            </div>
                            <div><h4>Skill Gaps or Short-Term Needs</h4>
                            </div>
                        </div>
                        <p><b>Solution:</b> Instantly access specialized talent without the long recruitment process — whether you need a React developer for 6 weeks or a QA team for product launch.</p>
                    </div>
                    </div>
                    <div className='solutions-box'>
                        <div className='solutionBox-container'>
                        <div className='solutionBox-content'>
                            <div>
                                <img src="/Group 374 (1).png" width={40} />
                            </div>
                            <div><h4>Budget & Time Constraints</h4>
                            </div>
                        </div>
                        <p><b>Solution:</b>  Save costs compared to full-time hiring. Avoid overhead like benefits, office space, and training — while speeding up delivery timelines.</p>
                    </div>
                    </div>
                    <div className='solutions-box'>
                        <div className='solutionBox-container'>
                        <div className='solutionBox-content'>
                            <div>
                                <img src="/Group 374 (2).png" width={40} />
                            </div>
                            <div><h4>Difficulty Scaling In-House Teams</h4>
                            </div>
                        </div>
                        <p><b>Solution:</b> Grow your team flexibly based on demand — scale up during product sprints or down after delivery, with no long-term commitments.</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}