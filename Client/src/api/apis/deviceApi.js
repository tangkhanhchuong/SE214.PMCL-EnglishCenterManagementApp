import axiosClient from '../axiosClient';

// api/productApi.js
// <<<<<<< HEAD
// class LecturerApi {
//     getAll = (params) => {
//         const url = 'http://localhost:5000/v1/device';
//         return axiosClient.get(url, { params });
//     };
// }
// const lecturerApi = new LecturerApi();
// export default lecturerApi;
// =======
class DeviceApi {
    getAll = (params) => {
        const url = 'http://localhost:5000/v1/device';
        return axiosClient.get(url);
    };

    getDetails = (params) => {
        const url = `http://localhost:5000/v1/device/${params.id}`;
        return axiosClient.get(url);
    };
}

const deviceApi = new DeviceApi();
export default deviceApi;
// >>>>>>> restoreHistory
