import NavbarLogo from "./NavbarLogo"
import NavBarItem from "./NavbarItems";

import './Navbar.css';
import { removeCurrentUrlPath } from "../../../utils/commonUtils";

function Navbar() {
    const navbarItems = removeCurrentUrlPath();

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