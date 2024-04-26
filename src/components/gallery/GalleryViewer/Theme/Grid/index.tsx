import GalleryItem from "./GalleryItem";
import { GalleryData } from "../../../../../assets/types/ExternalGalleryData";
import './GridGallery.css'

interface GalleryDataProps {
    data: GalleryData[]
}

function GridGallery(props: GalleryDataProps) {
    return (
        <section className="gridGallery">
            {
                props.data.map((item: GalleryData) => 
                    <GalleryItem
                        id={item.id}
                        media_url={item.media_url}
                        key={item.id}
                    />
                )
            }
        </section>
    );
}

export default GridGallery;