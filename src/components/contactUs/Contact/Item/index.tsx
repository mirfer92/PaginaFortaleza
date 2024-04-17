import './Item.css';
import { RemixiconComponentType } from "@remixicon/react";

interface ItemProps{
    text : string[];
    icon : RemixiconComponentType;
}

function Item(props: ItemProps) {
    return (
        <div className="contact__info__item">
            <props.icon size={0} className="contact__info__icon"/>
            <ul className="contact__info__list">
                {props.text.map(
                    (item, ind) => <li key={`$item-${ind}`}>{item}</li>)
                }
            </ul>
        </div>
    )
}

export default Item;