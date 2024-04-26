import useGalleryTheme from "../../../state/theme";
import GalleryMessage from "./GalleryMessage";
import CarouselGallery from "./Theme/Carousel";
import GridGallery from "./Theme/Grid";
import { GalleryData } from "../../../assets/types/GalleryData";
import useApiData from "../../../hooks/useApiData";
import useStaticGalleryData from "../../../hooks/useStaticGalleryData";

interface GalleryViewerParams {
    galleryKey: string,
    isExternal: boolean,
    url?: string,
    files?: string[]
}

function GalleryViewer(props: GalleryViewerParams){
    const { theme } = useGalleryTheme();
    const {
        data,
        isLoading,
        error,
        setIsLoading,
    } = props.isExternal ?
            useApiData({
                url: 'https://graph.instagram.com/me/media',
                method: 'get',
                payload: {},
                params: {
                    fields: 'id,caption,media_type,media_url,timestamp,thumbnail_url',access_token: import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN
                }
            }) :
            useStaticGalleryData(props.galleryKey, props.files);

    let galleryDataObj: GalleryData[];
    const reloadGallery = () => {
        setIsLoading(true);
    }
    if(props.isExternal && !isLoading && data) {
        galleryDataObj = data.length > 12 ?
            data.slice(0, 12) :
            data;
    } else {
        galleryDataObj = data;
    }
    if(error || isLoading) {
        return (
            <section className="gallery">
                <GalleryMessage
                    error={error}
                    isLoading={isLoading}
                    galleryKey={props.galleryKey}
                    isExternal={props.isExternal}
                    url={props.url}
                    getGallery={reloadGallery}
                />
            </section>
        )
    }
    if(theme === "grid")
        return <GridGallery data={galleryDataObj}/>
    if(theme === "carousel")
        return <CarouselGallery data={galleryDataObj}/>
    return <div>La galería de tipo "{theme}" no es válida.</div>
}

export default GalleryViewer;