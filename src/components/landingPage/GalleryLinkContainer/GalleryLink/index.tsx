import { useState } from 'react';
import './GalleryLink.css';

interface GalleryLinkProps{
    url: string,
    title: string,
    background: any
}

function GalleryLink(props: GalleryLinkProps){
    const [isHover, setIsHover] = useState(false);
    return (
        <div className='galleriesContainer__link'>
            <a
                href={`/${props.url}`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                    <div className='galleriesContainer__link__container'
                        style={
                            {
                                backgroundImage: `url(${props.background})`
                            }
                        }
                    >
                        <div 
                            className="galleriesContainer__link__vignette"
                            style={
                                isHover ? 
                                    {
                                        'background': 'radial-gradient(ellipse at center, #00000000 0%, #000000bb 70%,#000000ff 100%)',
                                    } : {}
                            }
                        >
                            {
                                isHover ?
                                    <div className='galleriesContainer__link__title'> 
                                        {props.title}
                                    </div> :
                                    <></>
                            }
                        </div>
                    </div>
            </a>
        </div>
    )
};

export default GalleryLink;