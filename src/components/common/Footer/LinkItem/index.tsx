import './LinkItem.css';
import { useState } from 'react';

function LinkItem ({title, href}: {title: string, href: string}) {

    const [isHover, setIsHover] = useState(false);


    return (
        <a
            className="footer__links__item"
            href={href}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={
                isHover ? {'color': '#000000', 'fontSize': '1.2em'} : {'color': '#ffffff'}
            }>
            {title}
        </a>
    )
}

export default LinkItem;