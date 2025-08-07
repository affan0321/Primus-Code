import './heroBlog.css'
export default function HeroBlog(){
    return(
        <div className='heroBlog'>
            <div className='heroBlog-container'>
                <div className='heroBlog-content'>
                    <div className='heroblog-text'>
                        <div className='heroblog-textContainer'>
                            <h1>Thoughts, News, And Ideas That Shape Our Journey</h1>
                            <div className='heroblog-p'>
                            <p>Dive into reflections, resources, and real-world perspectives to help you grow, connect, and stay inspired.</p>
                        </div>
                        </div>
                    </div>
                    <div >
                        <img src="/Mask group.png" width={500}height={345} />
                    </div>
                </div>
            </div>

        </div>
    )
}