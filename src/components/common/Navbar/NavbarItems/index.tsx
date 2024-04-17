import { useState } from 'react';
import "./NavbarItem.css";

function NavBarItem ({title, href}: {title: string, href: string}) {

    const [isHover, setIsHover] = useState(false);


    return (
        <a
            className="navbar__items__item"
            href={href}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={
                isHover ? 
                    {
                        'color': '#000000',
                        'backgroundImage': 'linear-gradient(-45deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)',
                    } : {}
            }>
            {title}
        </a>
    )
}

export default NavBarItem;