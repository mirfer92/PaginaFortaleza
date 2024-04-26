import gal1 from '../../../assets/img/gal1.jpg';
import gal2 from '../../../assets/img/gal2.jpg';
import gal3 from '../../../assets/img/gal3.jpg';
import './GalleryLinkContainer.css';

import GalleryLink from './GalleryLink';

function GalleryLinkContainer () {
    const galleries = [
        {
            url: 'galeria/exclusiva/herencias',
            title: 'Herencias',
            background: gal1
        },
        {
            url: 'galeria/externa/instagram',
            title: 'Instagram',
            background: gal2
        },
        {
            url: 'galeria/exclusiva/fin-de-año-2023',
            title: 'Gala de Fin de Año 2023',
            background: gal3
        },
    ];
    return (
        <section className="galleriesContainer">
            {
                galleries.map(item => 
                    <GalleryLink url={item.url} title={item.title} background={item.background} key={item.title}/>
                )
            }
        </section>
    )
    
}

export default GalleryLinkContainer;