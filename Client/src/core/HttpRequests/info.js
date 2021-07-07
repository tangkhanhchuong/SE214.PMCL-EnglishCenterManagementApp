import axiosClient from './axiosClient'

export default {
    details: (infoId) => axiosClient.get(`/info/${infoId}`)
}