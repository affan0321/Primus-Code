import Link from "next/link"
import './Button.css'
export default function Button() {
    return (
        <div>
            <Link href="blog-inner">
                <p className='btn10'>Read More</p>
            </Link>
        </div>
    )
}