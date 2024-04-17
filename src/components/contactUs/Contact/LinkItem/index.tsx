import './LinkItem.css';

interface LinkItemProps{
    text : string;
    icon : any;
    href : string;
}

function LinkItem(props: LinkItemProps) {
    return (
        <a href={props.href} className="contact__info__link">
            <props.icon size={0} className="contact__info__link__icon"/>
            <p className="contact__info__link__text">{props.text}</p>
        </a>
    )
}

export default LinkItem;