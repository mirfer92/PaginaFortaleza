import './Contact.css'
import { useEffect, useRef, useState } from "react";

function Contact() {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            const mapObj = new window.google.maps.Map(ref.current, {});
            setMap(mapObj);
        }
    }, [ref, map]);
    return(
        // <section className="contact">
            <div className='contact__map' ref={ref}/>
        //     <div className="contact__info">
        //         <h1>Academia de Danza "Fortaleza"</h1>
        //         <h2>
        //         ¡Pasión que se baila, cultura que se siente!
        //         </h2>

        //         <h3>Calle Ecuador #365 entre Av. Ayacucho y C. Junin</h3>
        //         <h3>Cochabamba - Bolivia</h3>
        //         <h3>
        //             +591 76453113 <br />
        //             +591 76476476
        //         </h3>
        //         <h3>jczero023@gmail.com</h3>
        //     </div>
        // </section>
    )
}

export default Contact;