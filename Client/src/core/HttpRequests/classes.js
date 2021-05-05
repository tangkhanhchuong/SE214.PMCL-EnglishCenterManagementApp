import axiosClient from './axiosClient'

export default {
    list: () => axiosClient.get('/classes'),

    details: (classId) => axiosClient.get(`/classes/${classId}`),

    add: (newClass) => axiosClient.post(`/classes`, newClass),

    addStudentToClass: ({ studentId, classId }) => axiosClient.post(`/classes/${classId}/students`, { student_id: studentId }),

    removeStudentFromClass: ({ studentId, classId }) => axiosClient.patch(`/classes/${classId}/students`, { student_id: studentId })
}