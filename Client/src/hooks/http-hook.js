import { useCallback, useRef, useEffect } from 'react';

export const SYSTEM_URL = process.env.REACT_APP_SERVER_BASE_URL;

export const useHttpClient = () => {

    const activeHttpRequests = useRef([]);

    const sendRequest = useCallback(
        async (url, method = "GET", body = null, headers = {}) => {
            console.log("Fetch")
            
            const httpAbortCtrl = new AbortController();
            activeHttpRequests.current.push(httpAbortCtrl);
            
            console.log("fetch ne", `${process.env.REACT_APP_SERVER_BASE_URL}/auth/login`)
            const data = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/login`, {
                method,
                body: (method !== "GET" && method !== "HEAD") ? JSON.stringify(body) : null,
                headers: headers,
                signal: httpAbortCtrl.signal
            });
            console.log(data, "Data ne")
            return data
        }, []);


    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
        };

    }, []);

    return { sendRequest };
};