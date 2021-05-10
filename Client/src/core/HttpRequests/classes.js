import axiosClient from './axiosClient'

export default {
    list: () => axiosClient.get('/classes'),
    details: (classId) => axiosClient.get(`/classes/${classId}`),
    add: (newClass) => axiosClient.post(`/classes`, newClass),
    edit: ({ classId, updatedClass }) => axiosClient.patch(`/classes/${classId}`, updatedClass),
    addStudentToClass: ({ studentId, classId }) => axiosClient.post(`/classes/${classId}/students`, { student_id: studentId }),
    removeStudentFromClass: ({ studentId, classId }) => axiosClient.patch(`/classes/${classId}/students`, { student_id: studentId }),
    addInstructorToClass: ({ instructorId, classId }) => axiosClient.post(`/classes/${classId}/instructors`, { instructor_id: instructorId }),
    removeInstructorFromClass: ({ instructorId, classId }) => { axiosClient.patch(`/classes/${classId}/instructors`, { instructor_id: instructorId }) }
}