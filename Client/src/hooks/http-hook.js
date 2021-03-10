import { useCallback, useRef, useEffect } from 'react';

export const SYSTEM_URL = "http://localhost:5000";

export const useHttpClient = () => {

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {

    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);

    return fetch(url, {
            method,
            body : (method !== "GET" && method !== "HEAD") ? JSON.stringify(body) : null,
            headers : headers,
            signal: httpAbortCtrl.signal
        });    
    },[]);


    useEffect(() => {
    return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
    };

    }, []);

    return { sendRequest };
};