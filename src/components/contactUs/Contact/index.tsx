import './Contact.css'
import {
    RiMapPinFill,
    RiMailFill,
    RiWhatsappFill,
    RiFacebookCircleFill,
    RiInstagramFill,
    RiTiktokFill } from "@remixicon/react";

import MyMap from './Map';
import Item from './Item';
import LinkItem from './LinkItem';

function Contact() {
    return(
        <section className="contact">
            <MyMap/>
            <div className="contact__info">
                <h1>Academia de Danza "Fortaleza"</h1>
                <h2>
                ¡Pasión que se baila, cultura que se siente!
                </h2>

                <Item icon={RiMapPinFill} text={["Calle Ecuador #178 entre Av. Ayacucho y C. Junin", "Cochabamba - Bolivia"]}/>
                <Item icon={RiWhatsappFill} text={["+591 76453113","+591 65653232"]}/>
                <Item icon={RiMailFill} text={["jczero023@gmail.com"]}/>

                <div className="contact__info__linksContainer">
                    <LinkItem icon={RiFacebookCircleFill} text="Academia de Danza Fortaleza" href="https://www.facebook.com/AcademiaDeDanzaFortaleza"/>
                    <LinkItem icon={RiInstagramFill} text="academia_fortaleza01" href="https://www.instagram.com/academia_fortaleza01"/>
                    <LinkItem icon={RiTiktokFill} text="academia.fortaleza_" href="https://www.tiktok.com/@academia.fortaleza_"/>
                </div>
            </div>
        </section>
    )
}

export default Contact;