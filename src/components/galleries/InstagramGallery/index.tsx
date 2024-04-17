import useApiData from "../../../hooks/useApiData.ts";
import GalleryItem from "./GalleryItem/index.tsx";
import GalleryMessage from "./GalleryMessage/index.tsx";
import './InstagramGallery.css'

interface GalleryItemProps {
    id: string;
    media_url: string;
    caption: string;
    thumbnail_url: string;
    media_type: string;
    timestamp: string;
}

function InstagramGallery() {
    const { data, isLoading, error } = useApiData({
        url: 'https://graph.instagram.com/me/media',
        method: 'get',
        payload: {},
        params: {
            fields: 'id,caption,media_type,media_url,timestamp,thumbnail_url',access_token: 'IGQWRQNFBVbk9saTBDRjAzR1RwOEY5OG5nSVNNcWxoMERLVjVKbkhHTm4tbTlpLXNMYnNGd1NJU0I3OG4zWFg4dERyZAmZAURWN2T1lERUs5ck8xNTh5cG9MSUJ0LU9uZA2U0R1B2X1gzOUZAaQQZDZD'
        }
    });
    if(error || isLoading) {
        return (
            <section className="instagramGallery">
                <GalleryMessage error={error} isLoading={isLoading}/>
            </section>
        )
    }
    const gallery = data.data.slice(0, 6);    
    return (
        <section className="instagramGallery">
            {
                gallery.map((item: GalleryItemProps) => 
                    <GalleryItem
                        id={item.id}
                        media_url={item.media_url}
                        caption={item.caption}
                        media_type={item.media_type}
                        timestamp={item.timestamp}
                        thumbnail_url={item.thumbnail_url}
                        key={item.id}
                    />
                )
            }
        </section>
    )
}

export default InstagramGallery;