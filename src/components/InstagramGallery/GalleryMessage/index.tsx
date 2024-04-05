import logo_instagram from '../../../assets/bxl-instagram-alt.svg';
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
                    <img className="instagramGalleryMessage__message__link__icon" src={logo_instagram} alt="ícono de Instagram" />
                </a>
            </h3>
        </section>
    )
}

export default GalleryMessage;