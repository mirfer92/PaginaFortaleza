import axios, { AxiosError } from 'axios';

async function sendRequest(
    url: string,
    method: string,
    payload: object,
    params: object,
    headers : object = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }) {
        const config = {
            url,
            method,
            payload,
            params,
            headers,
            timeout: 5000
        };
        const response = await axios.request(config)
        .catch((error: Error | AxiosError) => {
            if (axios.isAxiosError(error))  {
                console.error(`errorResponse: ${JSON.stringify(error)}`);
                throw new Error(error.message);
            }
          });
        return response;
    }

export {sendRequest};