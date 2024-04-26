import { useEffect, useState } from "react";
import { sendRequest } from "../utils/apiRequestManager";
import { GalleryData } from '../assets/types/GalleryData';

interface RequestProps {
    url: string,
    method: string,
    payload: object,
    params: object,
    headers?: object
}

const useApiData = (props: RequestProps) => {
    const [data, setData] = useState<GalleryData[]>([]); 
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>();
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await sendRequest(
                    props.url, props.method, props.payload, props.params, props.headers
                );
                setData(response?.data.data);
                setIsLoading(false);
            } catch(error: any) {
                setError(error);
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

export default useApiData;