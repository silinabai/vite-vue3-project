import { getCookie } from '@/utils/commonFunc';
import axios from 'axios';
import { Toast } from 'vant';

let http = axios.create();
// 设置接口超时时间
http.defaults.timeout = 60000;

// 请求地址，这里是动态赋值的的环境变量
// axios.defaults.baseURL = import.meta.env.VITE_API_DOMAIN;

//http request 拦截器
http.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

//http response 拦截器
http.interceptors.response.use(
    (res) => {
        if (res.status !== 200) {
            return Promise.reject({
                data: res.data,
                message: res.data.errstr || '网络开了小差！请重试...',
            });
        }

        return res.data && res.data.data;
    },
    (err) => {
        if (err.message && err.message.indexOf('timeout of') > -1) {
            return Promise.reject({
                data: err,
                message: '请求超时，请重试',
            });
        }
        return Promise.reject({
            data: err,
            message: (err && err.message) || '网络开了小差！请重试...',
        });
    },
);

const getHeader = (formdata) => {
    console.log(getCookie('auth'), 'Cookie');
    let headerObj = {
        auth: getCookie('auth'),
    };
    return {
        'Content-Type': formdata ? 'multipart/form-data' : 'application/json',
        ...headerObj,
    };
};
export default class CommonService {
    /**
     * @desc get请求
     * @return Promise<?any>;
     */
    static get(api, params, showErr = false, formdata = false) {
        return new Promise((resolve, reject) => {
            if (!window.navigator.onLine) {
                Toast('网络错误，请检查网络');
                reject(new Error('Offline'));
                return;
            }
            http({
                url: api,
                method: 'GET',
                params: params || {},
                headers: getHeader(formdata),
            })
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    console.log('service catch===================');
                    if (showErr) {
                        Toast(err.errMsg);
                    }
                    reject(err);
                });
        });
    }
    /**
     * @desc post请求
     * @return Promise<?any>;
     */
    static post(api, data, showErr = false, formdata = false) {
        return new Promise((resolve, reject) => {
            if (!window.navigator.onLine) {
                Toast('网络错误，请检查网络');
                return;
            }
            http({
                url: api,
                method: 'POST',
                data: data || {},
                headers: getHeader(formdata),
            })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    console.log('service catch===================');
                    if (showErr) {
                        Toast(err.errMsg);
                    }
                    reject(err);
                });
        });
    }
}
