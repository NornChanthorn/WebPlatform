import _ from 'lodash';
window._ = _;

import axios from 'axios';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
axios.interceptors.response.use(function (response) {
    if (response.data.token) {
        let token = response.data.token;
        axios.defaults.headers.common["Authorization"] = 'Bearer ' + token;
        return response;
    }
    return response;
}, function (error) {
    if (error.response.status === 401) {
        console.error('Clear auth')
    }
    if (error.response.status === 503) {
        window.location.assign('error503');
    }
    return Promise.reject(error);
});
export default axios;