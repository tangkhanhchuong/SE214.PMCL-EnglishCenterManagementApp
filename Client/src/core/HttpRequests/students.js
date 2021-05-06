import axiosClient from './axiosClient'

export default {
    list: () => axiosClient.get('/students'),
    details: (studentId) => axiosClient.get(`/students/${studentId}`),
    add: (newStudent) => axiosClient.post(`/students`, newStudent),
    edit: (updatedStudent) => {
        const { info, id } = updatedStudent
        return axiosClient.patch(`/students/${id}`, info)
    },
    pay: ({ studentId, classId }) => axiosClient.patch(`/students/${studentId}/pay-tuition`, { class_id: classId })
}