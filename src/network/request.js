import axios from 'axios'
export function request(config) {
    const instace = axios.create({
        baseURL: 'http://123.207.32.32:8000/',
        timeout: 5000
    })

    //2. 拦截器
    instace.interceptors.request.use(config => {
        // console.log(config);
        return config
    }, err => {
        console.log(err);
    });

    instace.interceptors.response.use(res => {
        console.log(res);
        return res.data
    }, err => {
        console.log(err);
    });

    return instace(config)
}

export function request2(config) {
    const instace = axios.create({
        // baseURL: 'ajax/moreComingList?ci=209&token=&limit=10&movieIds=1208919%2C1301774%2C1241385%2C1233290%2C1197077%2C1222268%2C1218142%2C1218188%2C1250661%2C1277751&optimus_uuid=9E2131905C8611EA918CEB3F73C50396C646A00022474FE6B0E7E55F3CF3B523&optimus_risk_level=71&optimus_code=10',
        // baseURL: 'api/api_open.php?a=list&c=data&type=31',
        baseURL: 'api/api_open.php?',
        timeout: 5000
    })

    //2. 拦截器
    instace.interceptors.request.use(config => {
        // console.log(config);
        return config
    }, err => {
        console.log(err);
    });

    instace.interceptors.response.use(res => {
        console.log(res);
        return res.data
    }, err => {
        console.log(err);
    });

    return instace(config)
}