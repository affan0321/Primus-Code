import './ProjectsMob.css'

export default function ProjectsMob(){
    return(
        <div className='projectsWeb'>
            <div className='projectsWeb-container'>
                <h4>Our Work Across Industries</h4>
                <h2>See how we bring brands to life</h2>
                <p className='projectsWeb-container-p'>From small businesses to nonprofits, eCommerce to creative professionals, explore our diverse portfolio categorized by the industries we serve. Use the tags to filter projects and find work that aligns with your vision.</p>
                <div className='projectsWebBtn-container'>
                    <div className='projectsWeb-btn'>
                        <button>Authors</button>
                    </div>
                    
                    <div className='projectsWeb-btn'>
                        <button>Fitness</button>
                    </div>

                    <div className='projectsWeb-btn'>
                        <button>Food</button>
                    </div>

                    <div className='projectsWeb-btn1'>
                        <button>Education</button>
                    </div>

                    <div className='projectsWeb-btn1'>
                        <button>Non-Profits</button>
                    </div>

                    <div className='projectsWeb-btn'>
                        <button>Medical</button>
                    </div>

                    <div className='projectsWeb-btn1'>
                        <button>Real Estate</button>
                    </div>

                    <div className='projectsWeb-btn1'>
                        <button>Mental Health</button>
                    </div>
                </div>
                <div className='projects-Img'>
                    <div>
                        <img src="/Frame 4(1).png" width={300}/>
                    </div>
                    <div>
                        <img src="/Frame 4(2).png" width={300} />
                    </div>
                    <div>
                        <img src="/Frame 4(3).png" width={300} />
                    </div>
                    <div>
                        <img src="/Frame 4(4).png" width={300} />
                    </div>
                    <div>
                        <img src="/Frame 4(5).png" width={300} />
                    </div>
                    <div>
                        <img src="/Frame 4(6).png" width={300} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}