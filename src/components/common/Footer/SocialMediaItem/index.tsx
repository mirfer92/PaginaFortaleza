import { useState } from 'react';
import './SocialMediaItem.css';

interface SocialMediaItemProps{
    name: string,
    url: string,
    icon: any
}

function SocialMediaItem(props: SocialMediaItemProps) {
    const [isHover, setIsHover] = useState(false);
    return (
        <a href={props.url}
            className={`footer__socialMedia__item ${props.name}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={
                isHover ? 
                {
                    'boxShadow' : '0px 0px 20px #000'
                } : {}
            }
        >
            <img src={props.icon} alt={`${props.name} icon`} className={`footer__socialMedia__item__icon ${props.name}`} />
        </a>
    )
}

export default SocialMediaItem;