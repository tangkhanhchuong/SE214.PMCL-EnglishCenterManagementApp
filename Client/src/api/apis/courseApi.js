import axiosClient from '../axiosClient';

// api/productApi.js
class CourseApi {
    getAll = (params) => {
        const url = 'http://localhost:5000/v1/course';
        return axiosClient.get(url, { params });
    };
}
const courseApi = new CourseApi();
export default courseApi;