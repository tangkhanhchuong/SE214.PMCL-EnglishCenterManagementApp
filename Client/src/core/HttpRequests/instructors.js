import axiosClient from './axiosClient'

export default {
    list: () => axiosClient.get('/instructors'),
    details: (instructorId) => axiosClient.get(`/instructors/${instructorId}`),
    add: (newInstructor) => axiosClient.post(`/instructors`, newInstructor),
    edit: (updatedInstructor) => {
        const { info, id } = updatedInstructor
        return axiosClient.patch(`/instructors/${id}`, info)
    },
    delete: (instructors) => axiosClient.delete(`/instructors/${instructors}`),
}