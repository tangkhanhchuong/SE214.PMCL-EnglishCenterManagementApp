import axiosClient from './axiosClient'

export default {
    entities: () => axiosClient.get('/statistic/entities')
}