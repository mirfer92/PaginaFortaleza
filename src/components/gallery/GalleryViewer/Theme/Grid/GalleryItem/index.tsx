import './GalleryItem.css'
import { GalleryItemProps } from '../../../../../../assets/types/GalleryData';

function GalleryItem(props : GalleryItemProps) {
    return (
        <div className="gridGallery__item" key={props.id}>
           <img className="gridGallery__item__image" src={props.media_url} alt={props.id}/>
        </div>
    )
}

export default GalleryItem;