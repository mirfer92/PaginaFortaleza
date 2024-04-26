import { useEffect, useState } from "react";
import { GalleryData } from '../assets/types/GalleryData';

const useStaticGalleryData = (key: string, files: string[] | undefined) => {
    const [data, setData] = useState<GalleryData[]>([]); 
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>();
    useEffect(() => {
        const getData = () => {
            if(files) {
                const dataObj = files.map(
                    (img) => {
                        return {id: img, media_url: `/img/gallery/${key}/${img}`}
                    }
                );
                setData(dataObj);
                setIsLoading(false);
            } else {
                setError('La galería no contiene imágenes.');
            }
        };
        getData();
    }, [isLoading]);
    return {
        data,
        isLoading,
        error,
        setData,
        setIsLoading,
        setError
    }
}

export default useStaticGalleryData;