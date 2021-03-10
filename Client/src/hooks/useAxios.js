import { useState, useEffect } from 'react';

const useAxios = (initValue, action) => {
    const [listData, setListData] = useState(initValue);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await action();
                console.log('Fetch products successfully: ', response);
                setListData(response.data);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchData();
    }, []);

    return [listData];
}

export default useAxios;