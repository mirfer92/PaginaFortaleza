export type GalleryData = {
    id: string;
    media_url: string;
    caption?: string;
    thumbnail_url?: string;
    media_type?: string;
    timestamp?: string;
}

export type GalleryItemProps = {
    id: string;
    media_url: string;
}