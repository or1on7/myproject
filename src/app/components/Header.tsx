import Link from "next/link";
//import styles from '../styles/Header.module.css'

export default function Header(){
    return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-white">Accueil</Link>
              <Link href="/contact" className="text-white">Contact</Link>
              <Link href="/dog" className="text-white">Dog</Link>
              <Link href="/music" className="text-white">Music</Link>
              <Link href="/profile/1" className="text-white">Profile</Link>
            </div>
            {/* Responsive Menu Button for Mobile */}
            <div className="lg:hidden">
              {/* Add your mobile menu button/icon here */}
            </div>
          </div>
        </nav>
      )
}