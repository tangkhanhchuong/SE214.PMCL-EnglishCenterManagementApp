import axiosClient from '../axiosClient';

const domain = `http://localhost:5000`;

class ClassApi {
    getAll = (params) => {
        const url = `${domain}/v1/class/1/students`;
        return axiosClient.get(url, { params });
    };

    getStudentsInClass = (params) => {
        const url = `${domain}/v1/class/${params}/students`;
        return axiosClient.get(url, { params });
    };

    getLecturersInClass = (params) => {
        const url = `${domain}/v1/class/${params}/lecturers`;
        return axiosClient.get(url, { params });
    }
}
const courseApi = new ClassApi();
export default courseApi;