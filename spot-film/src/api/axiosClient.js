import axios from 'axios';
import queryString from 'query-string';
import apiConfig from './apiConfig';

/**
 * @description: axios client for api calls
 * @param {string} url
 * @param {object} data
 * @param {string} method
 * @param {object} headers
 * @returns {object}
 *  */
const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({ ...params, api_key: apiConfig.apiKey, language: apiConfig.language })
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {

    if (response && response.data) {
        return response.data;
    }

    return response;

}, (error) => {
    throw error;
});

export default axiosClient;