import axios from '@/utils/axios';



export const postRequest = params => { return axios.post(`/moxIntlBlackGround/customer/getList`, params); };

export const StatisticsHistroy = params => { return axios.get(`/OpenStatistics/getHistroy`, { params: params }); };