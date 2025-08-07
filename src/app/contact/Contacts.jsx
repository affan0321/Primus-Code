import './Contacts.css'
export default function Contacts(){
    return(
        <div className="contacts">
        <div className='contacts-container'>
            <div>
                <img src="/Group 12.png" width={50} />
            </div>
            <div>
                <h5>Address</h5>
                <div className='contacts-p'>
                <p>17224 S. Figueroa Street, Gardena, CA 90248, USA</p>
                </div>
            </div>
        </div>
        <div className='contacts-container'>
            <div>
                <img src="/Group 11.png" width={50}/>
            </div>
            <div>
                <h5>Email</h5>
                <p>hello@primuscode.com</p>
            </div>
        </div>
        <div className='contacts-container'>
            <div>
                <img src="/Group 10.png" width={50} />
            </div>
            <div>
                <h5>Phone</h5>
                <p>+1 111-222-1212</p>
            </div>
        </div>
        </div>
    )
}