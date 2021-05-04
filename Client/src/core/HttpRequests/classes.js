import axiosClient from './axiosClient'

export default {
    list: () => axiosClient.get('/classes'),
    details: (classId) => axiosClient.get(`/classes/${classId}`),
    addStudentToClass: ({ studentId, classId }) => {
        return axiosClient.post(`/classes/${classId}/students`, { student_id: studentId })
    },
    removeStudentFromClass: ({ studentId, classId }) => {
        return axiosClient.patch(`/classes/${classId}/students`, { student_id: studentId })
    }
}