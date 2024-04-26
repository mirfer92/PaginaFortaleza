import './Item.css';
import { RemixiconComponentType } from "@remixicon/react";

interface ItemProps{
    text : string[];
    icon : RemixiconComponentType;
}

function Item(props: ItemProps) {
    return (
        <div className="infoContainer__info__item">
            <props.icon size={0} className="infoContainer__info__icon"/>
            <ul className="infoContainer__info__list">
                {props.text.map(
                    (item, ind) => <li key={`$item-${ind}`}>{item}</li>)
                }
            </ul>
        </div>
    )
}

export default Item;