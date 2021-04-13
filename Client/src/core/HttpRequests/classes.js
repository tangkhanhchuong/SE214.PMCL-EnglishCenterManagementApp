import axiosClient from './axiosClient'

export default {
    list: () => axiosClient.get('/classes'),
    details: (classId) => axiosClient.get(`/classes/${classId}`),
}