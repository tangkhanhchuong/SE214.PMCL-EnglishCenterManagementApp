import axiosClient from '../axiosClient';

// api/productApi.js
class LecturerApi {
    getAll = (params) => {
        const url = 'http://localhost:5000/v1/lecturer';
        return axiosClient.get(url, { params });
    };
}
const lecturerApi = new LecturerApi();
export default lecturerApi;