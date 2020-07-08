import axios from 'axios'
import Cookie from 'js-cookie'

//process.env
//let url = process.env.NODE_ENV == 'development' ? '' : 'http://www.fast.com';

const fetch = axios.create({
    //baseURL: url,
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
});

fetch.interceptors.request.use(res=>{
    console.log('request',res);
    let token = Cookie.get('token');
    if(token)
    res.headers.token = token;  
    return res;
},error=>{
    console.log(error);
    return Promise.reject(error);
});

fetch.interceptors.response.use(res=>{
    console.log('response', res);
    return  res;
},error=>{
    console.log('response reject',error);
    if (error.response.status === 401) {
        // const data = {
        //     code: -1,
        //     message: '登录超时'
        // };
        // return Promise.reject(data);
        console.log('no login');
    }
    
    return Promise.reject(error);
});


export default fetch;
