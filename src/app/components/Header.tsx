import Link from "next/link";
import styles from '../styles/Header.module.css'

export default function Header(){
    return (
        <>
            <ul className={styles.menu}>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/dog">Dog</Link></li>
                <li><Link href="/music">Music</Link></li>
                <li><Link href="/profile/1">Profile</Link></li>
            </ul>
        </>
    )
}