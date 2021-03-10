import axiosClient from '../axiosClient';

// api/productApi.js
class PersonalInformationApi {
    getAll = (params) => {
        const url = 'http://localhost:5000/v1/personal-info';
        return axiosClient.get(url, { params });
    };
}
const personalInfoApi = new PersonalInformationApi();
export default personalInfoApi;