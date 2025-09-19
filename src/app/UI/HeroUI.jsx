import './HeroUI.css'
export default function HeroUI(){
    return(
         <div className="hero-about">
            <div className="hero-container">
            <div className='heroAbout-content'>
                <div>
                    <h1 className='UIh1'>Design Experience That <span>Connect and Convert</span></h1>
                            <p className='UIp'>We empower businesses to thrive in the digital landscape with end-to-end technology and marketing solutions.</p>
                            <button className='btn1'>Getting Started</button>
                            <button className='btn9'>Our Work</button>
                </div>
                <div>
                    <img src="/Group(14).png"  width={490} height={421} />
                </div>
            </div>
            </div>
        </div>
    )
}