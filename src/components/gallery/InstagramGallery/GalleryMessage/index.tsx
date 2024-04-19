import {RiInstagramFill} from '@remixicon/react';
import './GalleryMessage.css';

interface GalleryMessageProps {
    isLoading: boolean;
    error: any;
}

function GalleryMessage (props: GalleryMessageProps) {
    return (
        <section className="instagramGalleryMessage">
            <h2 className="instagramGalleryMessage__header">
                    {
                        props.error ? 
                            "Ups! No se puede cargar la galería desde Instagram" :
                            "Cargando galería por favor, espere..."                            
                    }
            </h2>
            <h3  className="instagramGalleryMessage__message">Visítenos en:&nbsp; 
                <a
                    className="instagramGalleryMessage__message__link"
                    href="https://www.instagram.com/academia_fortaleza01/"
                >
                    Academia Fortaleza en Instagram&nbsp; 
                    <RiInstagramFill size={0} className="instagramGalleryMessage__message__link__icon"/>
                </a>
            </h3>
        </section>
    )
}

export default GalleryMessage;