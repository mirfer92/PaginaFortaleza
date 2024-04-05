import { useEffect, useState } from "react";
import { sendRequest } from "../utils/apiRequestManager";

interface RequestProps {
    url: string,
    method: string,
    payload: object,
    params: object,
    headers?: object
}

const useApiData = (props: RequestProps) => {
    const [data, setData] = useState<any>([]); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await sendRequest(
                    props.url, props.method, props.payload, props.params, props.headers
                );
                setData(response?.data);
                setIsLoading(false);
            } catch(error: any) {
                setError(error);
            }
        };
        getData();
    }, []);
    return {
        data,
        isLoading,
        error
    }
}

export default useApiData;