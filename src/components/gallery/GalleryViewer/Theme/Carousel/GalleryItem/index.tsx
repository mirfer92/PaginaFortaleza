import { useState } from "react";
import './GalleryItem.css'
import { GalleryItemProps } from '../../../../../../assets/types/ExternalGalleryData';

function GalleryItem(props : GalleryItemProps) {
    const [isHover, setIsHover]= useState<boolean>(false);
    return (
        <div className="carouselGallery__item" key={props.id}>
           <img className="carouselGallery__item__image" src={props.media_url} alt={props.id}/>
        </div>
    )
}

export default GalleryItem;