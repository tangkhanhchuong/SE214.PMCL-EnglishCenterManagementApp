import axiosClient from './axiosClient'

export default {
    list: () => axiosClient.get('/courses'),
    details: (courseId) => axiosClient.get(`/courses/${courseId}`),
    add: (newCourse) => axiosClient.post(`/courses`, newCourse)
}