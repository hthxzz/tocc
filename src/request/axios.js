/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import Vue from 'vue'
import axios from 'axios';
import { Message } from 'element-ui';
// import router from '../router';
// import store from '../store/index';
const tip = msg => {
   Message({
       showClose: true,
       message: msg,
       type:'error',
       offset:200
   });
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
            // 403 token过期
            // 清除token并跳转登录页
        case 403:
            tip('登录过期，请重新登录');
            localStorage.removeItem('token');
            store.commit('loginSuccess', null);
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
            // 404请求不存在
        case 404:
            tip('请求的资源不存在,路径可能不对');
            break;
        default:
            console.log(other);
    }
}


if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = "https://www.easy-mock.com/mock/5d08d65d78c2cb2a1bddf16a/rest/jtyj/"
}else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = '';
}
console.log(axios.defaults.baseURL);
// 创建axios实例
var instance = axios.create({
    timeout: 1000 * 12
});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    // 请求失败
    error => {
        const {
            response
        } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
        }
    });
 function $get(url,params){
    return instance.get(url,{
        params: params
    })
};
 function $post(url, params) {
    return instance.post(url, qs.stringify(params));
};


// Vue.prototype.$get = $get;
// Vue.prototype.$post = $post;
 export default {
    $get: $get,
    $post: $post
 };