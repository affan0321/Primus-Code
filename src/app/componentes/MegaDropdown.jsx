"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./MegaDropdown.module.css";

export default function MegaDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.dropdown}>
            <li
                className={styles.dropbtn}
                onClick={() => setOpen(!open)}
            >
                Services <img src="/chevron-down.png" alt="" />
            </li>

            {open && (
                <div className={`${styles.dropdownContent} ${open ? styles.open : styles.closed}`}>
                    <div className={styles.header}>
                        {/* <h2>Mega Menu</h2> */}
                    </div>

                    <div className={styles.row}>
                        <div className={styles.column}>
                            <img src="/Frames(13).png" width={150} />
                            <Link href="/web-dev">Website Development</Link>
                            <Link href="/mob-dev">Mobile Development</Link>
                            <Link href="/software-dev">Custom Software Development</Link>
                            <Link href="/AI">AI & Machine Learning</Link>
                            <Link href="/data">Data & Analytics</Link>
                        </div>

                        <div className={styles.column}>
                            <img src="/Group(13).png" width={170}  />
                            <Link href="/IT">IT Staff Augmentation</Link>
                            <Link href="UI">UI/UX Design & Product Strategy</Link>
                            <Link href="digital">Digital Transformation Consultation</Link>
                        </div>

                        <div className={styles.column}>
                            <img src="/Group (14).png" width={109}/>
                            <Link href="/shopify">Shopify Development</Link>
                            <Link href="/wooCommerce">WooCommerce Development</Link>
                            <Link href="store">Store Migration & Platform Integration</Link>
                        </div>
                        <div className={styles.column}>
                            <img src="/Group(15).png" width={98}/>
                            <Link href="/SEO">SEO & Analysis</Link>
                            <Link href="paid-marketing">Paid Marketing</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
