import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GalleryData } from "../../../../../assets/types/GalleryData";
import GalleryItem from "./GalleryItem";
import './CarouselGallery.css';

interface GalleryDataProps {
  data: GalleryData[]
}

function CarouselGallery(props: GalleryDataProps) {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3.5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2.5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1.5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return(
        <Carousel responsive={responsive} className="carouselGallery">
            {
                props.data.map((item: GalleryData) => 
                    <GalleryItem
                        id={item.id}
                        media_url={item.media_url}
                        key={item.id}
                    />
                )
            }
        </Carousel>
    );
};

export default CarouselGallery;