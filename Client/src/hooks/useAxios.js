import { useState, useEffect } from 'react';

const useAxios = (initValue, action) => {
    const [listData, setListData] = useState(initValue);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await action();
                setListData(response.data);
            } catch (error) {
            }
        }
        fetchData();
    }, []);

    return [listData];
}

export default useAxios;