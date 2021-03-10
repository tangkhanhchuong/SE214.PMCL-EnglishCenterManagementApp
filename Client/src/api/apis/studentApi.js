import axiosClient from '../axiosClient';

// api/productApi.js
class StudentApi {
    getAll = (params) => {
        const url = 'http://localhost:5000/v1/student';
        return axiosClient.get(url, { params });
    };
}
const studentApi = new StudentApi();
export default studentApi;