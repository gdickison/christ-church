import Image from "next/image"
import Link from "next/link"
import logo from '../public/logo.png'
import menu from '../public/menu_burger.png'

const NavMenu = () => {
  return (
    <div className="nav-menu-container">
      <Link href='/'>
        <Image src={logo} alt="Christ Church Logo" width={300}/>
      </Link>
      <li className="nav-menu-links">
        <ul className="nav-menu-link">
          <Link href='#'>Events</Link>
        </ul>
        <ul className="nav-menu-link">
          <Link href='https://www.christkirk.com/music-library/'>Music</Link>
        </ul>
        <ul className="nav-menu-link">
          <Link href='https://www.christkirk.com/get-involved/'>Get Involved</Link>
        </ul>
        <ul className="nav-menu-link">
          <Link href='https://www.christkirk.com/give/'>Give</Link>
        </ul>
        <ul className="nav-menu-link">
          <Link href='mailto:office@christKirk.com'>Contact</Link>
        </ul>
      </li>
      <div className="nav-menu-burger">
        <Image src={menu} alt='Menu' width={30}/>
      </div>
    </div>
  )
}

export default NavMenu