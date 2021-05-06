import axiosClient from './axiosClient'

export default {
    list: () => axiosClient.get('/notifications'),
    add: (newNotices) => axiosClient.post('/notifications', newNotices)
}