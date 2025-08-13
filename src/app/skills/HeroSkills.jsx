import Dropdown from './Dropdown'
import './HeroSkills.css'
import Search from './Search'
export default function HeroSkills() {
    return (
        <>
            <div className="heroSkills">
                <div className="heroSkills-container">
                    <div className="heroSkills-content">
                        <h1>Our Work</h1>
                        <div className='heroSkills-p'>
                            <p>A showcase of custom digital solutions crafted to solve real business challenges and drive measurable success across industries.</p>
                        </div>
                        <img src="/Frame.png" alt="" width={1100} />
                    </div>
                </div>
            </div>
            <div className='heroSkills-inner'>
                <div className='dropdowns'>
                    <Dropdown />
                    <Search />
                </div>
            </div>
        </>
    )
}