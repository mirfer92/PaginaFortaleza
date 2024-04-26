import {RiMailSendFill, RiRefreshFill} from '@remixicon/react';
import { capitalize } from '../../../../utils/commonUtils';
import { getIconByKey } from '../../../../utils/iconUtils';
import logo from '../../../../assets/img/logo_main.jpg'
import './GalleryMessage.css';

interface GalleryMessageProps {
    galleryKey: string,
    isExternal: boolean,
    url?: string,
    isLoading: boolean,
    error: any,
    getGallery: () => void,
}

function GalleryMessage (props: GalleryMessageProps) {
    const selectedIcon = getIconByKey(props.galleryKey);
    return (
        <section className="galleryMessage">
            <h2 className="galleryMessage__header">
                    {
                        props.error ? 
                            `Ups! No se pudo cargar la Galería ${
                                props.isExternal ? 
                                    `desde "${capitalize(props.galleryKey)}"` :
                                    `"${capitalize(props.galleryKey.replace(/-/g, ' '))}"`
                            }` :
                            "Cargando galería, por favor espere..."                            
                    }
            </h2>
            <figure className="galleryMessage__logo">
                <img src={logo} alt="Logo Academia de Danza Fortaleza" />
            </figure>
            {
                props.isExternal ?
                    <h3 className="galleryMessage__message">Visítenos en:&nbsp;
                        <a
                            className="galleryMessage__message__link"
                            href={props.url}
                        >
                            Academia Fortaleza en {capitalize(props.galleryKey)}&nbsp; 
                                {selectedIcon}
                        </a>
                    </h3> :
                    <h3  className="galleryMessage__message">Si el problema persiste, envíenos un comentario aquí:&nbsp;
                        <a
                            className="galleryMessage__message__link"
                            href="/contacto"
                        >
                            Página de Comentarios&nbsp; 
                            <RiMailSendFill size={0} className="galleryMessage__message__link__icon"/>
                        </a>
                    </h3>
            }
            <div className="galleryMessage__reload" onClick={props.getGallery}>
                <RiRefreshFill size={25} />
                <h4>&nbsp;Volver a cargar galería...</h4>
            </div>
        </section>
    )
}

export default GalleryMessage;