import './HeroContact.css'
export default function HeroContact(){
    return(
        <>
        <div className="heroContact">
            <div className="heroContact-container">
                <div className="heroContact-content">
                    <div>
                        <div>
                            <h1>Ready to Build <br /><span>Something Great?</span></h1>
                            <div className='heroContact-p'>
                            <p>Have a project in mind or a question to ask? Reach out to our team—we’re here to help you turn ideas into reality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='form-container'>
            <div className="build-form">
                <form className='form'>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Phone Number</label>
                        <input type="email" id="email" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Message"></textarea>
                    </div>
                    <p className='btn8'>Submit</p>
                </form>
        </div>
        </div>
        </>
    )
}