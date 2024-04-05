import { useState } from "react";
import './GalleryItem.css'

interface GalleryItemProps {
    id: string;
    media_url: string;
    caption: string;
    thumbnail_url: string;
    media_type: string;
    timestamp: string;
}

function GalleryItem(props : GalleryItemProps) {
    const [isHover, setIsHover]= useState<boolean>(false);
    return (
        <div className="instagramGallery__item" key={props.id}>
           <img className="instagramGallery__item__image" src={props.media_url} />
        </div>
    )
}

export default GalleryItem;