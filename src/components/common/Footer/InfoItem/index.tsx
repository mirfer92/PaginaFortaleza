import { RemixiconComponentType } from '@remixicon/react';
import './InfoItem.css';

interface InfoItemProps {
    icon: RemixiconComponentType,
    text: string | string[]
}

function InfoItem(props: InfoItemProps){
    return (
        <div className="footer__info__item">
            <figure className="footer__info__item__icon">
                <props.icon size={0} className="footer__info__item__img" />
            </figure>
            <div className="footer__info__item__textContainer">
                {
                    Array.isArray(props.text) ?
                        props.text.map(
                            (text, ind) =>
                                <div className="footer__info__item__text" key={`text-${ind}`}>{text}</div>
                        )
                        : <div className="footer__info__item__text">{props.text}</div>
                }
            </div>
        </div>
    )
}

export default InfoItem;