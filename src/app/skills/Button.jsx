import Link from "next/link";
import './Button.css'
export default function Button1(){
    return(
        <div>
            <Link href="skills-inner">
                <button>
                    <p className='btn11'>Read More</p>
                </button>
            </Link>
        </div>
    )
}