import axiosClient from './axiosClient'

export default {
    list: () => axiosClient.get('/persons/students'),
    details: (studentId) => axiosClient.get(`/persons/students/${studentId}`),
}