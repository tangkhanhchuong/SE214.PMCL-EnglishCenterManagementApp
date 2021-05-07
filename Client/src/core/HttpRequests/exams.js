import axiosClient from './axiosClient'

export default {
    list: () => axiosClient.get('/exams'),
    details: (examId) => axiosClient.get(`/exams/${examId}`),
    add: (newExam) => axiosClient.post(`/courses`, newExam)
}