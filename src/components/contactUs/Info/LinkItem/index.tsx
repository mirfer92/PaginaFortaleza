import './LinkItem.css';

interface LinkItemProps{
    text : string;
    icon : any;
    href : string;
}

function LinkItem(props: LinkItemProps) {
    return (
        <a href={props.href} className="infoContainer__info__link">
            <props.icon size={0} className="infoContainer__info__link__icon"/>
            <p className="infoContainer__info__link__text">{props.text}</p>
        </a>
    )
}

export default LinkItem;