import NavbarLogo from "./NavbarLogo"
import NavBarItem from "./NavbarItems";

import './Navbar.css';

function Navbar() {

    const navbarItems = [
        {
            title: 'nosotros',
            url: '#'
        },
        {
            title: 'presentaciones',
            url: '#'
        },
        {
            title: 'galería',
            url: '#'
        },
        {
            title: 'academia',
            url: '#'
        },
        {
            title: 'contáctenos',
            url: '#'
        },
    ];

    return (
      <nav className="navbar">
        <NavbarLogo />
        <div className="navbar__items">
            {navbarItems.map(item => <NavBarItem key={item.title} title={item.title} href={item.url}/>)}
        </div>
      </nav>
    )
  }
  
  export default Navbar