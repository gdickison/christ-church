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
          <Link href='/events'>Events</Link>
        </ul>
        <ul className="nav-menu-link">
          <Link href='#'>Music</Link>
        </ul>
        <ul className="nav-menu-link">
          <Link href='#'>Get Involved</Link>
        </ul>
        <ul className="nav-menu-link">
          <Link href='#'>Give</Link>
        </ul>
        <ul className="nav-menu-link">
          <Link href='#'>Contact</Link>
        </ul>
      </li>
      <div className="nav-menu-burger">
        <Image src={menu} alt='Menu' width={30}/>
      </div>
    </div>
  )
}

export default NavMenu