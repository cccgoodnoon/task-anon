import axios from 'axios'

// // https://blog.csdn.net/lucky541788/article/details/91575227

// // 假如项目很大，可以考虑拆分 api 请求
// const http = Axios.create({
//     baseURL: 'url',
//     headers: { 'X-Custom-Header': 'foobar' },
//     withCredentials: true // 跨域
// })

// export default http


// -----------------------------------------------------------------------------
// modified by zhangwei on 2020.04.21
// - Add some empty methods to reflect the architecture requirement and the interface 
// design. Also add a default callback method.
// - This module replaced the former http.js
// -----------------------------------------------------------------------------

// CONFIG_API_BASE_URL
// The common base url for the backend restful api. Attention it has the backslash.
//
// CONFIG_HTMLAPPL_BASE_URL
// The base url for the current html application. Attention it has the backslash.
//
// const CONFIG_API_BASE_URL = "http://47.111.234.116:8080/api/"

// const CONFIG_HTMLAPPL_BASE_URL = "http://47.111.234.116:8080/api/anon/"

// -----------------------------------------------------------------------------
// HTTP I/O service. It encapsulate the low level HTTP actions to simplify the 
// developing of the service layer and the UI layer.
//
// Reference
// https://blog.csdn.net/lucky541788/article/details/91575227
//  
// TODO: For caimeiqi: use the class to replace the methods 
// -----------------------------------------------------------------------------
class HttpIoService{
    constructor(baseurl)
    {
        this.baseurl = baseurl;
    }

    // initialize this module with the configuration parameter.
    init(baseurl) 
    {
        axios.defaults.timeout = 5000
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        axios.defaults.params = {}
        // POST传参序列化
        axios.interceptors.request.use((config) => {
            // if (config.method === 'post') {
            //     config.data = qs.stringify(config.data)
            // }
            let URL = config.url.split(config.baseURL)
            return config
        }, (error) => {
            return Promise.reject(error)
        })
        
        // 返回状态判断
        axios.interceptors.response.use((res) => {
            //console.log(res)
            return res
        }, (error) => {
            return Promise.reject(error)
        })
    }

    set_cros(enabled)
    {

    }

    set_security_token(token)
    {

    }

    // The default callback can be used when calling some methods.
    // The default behavior of it is to print whatever input. 
    // 
    default_callback(o)
    {
        console.print("/service/http/_default_callback: ")
        console.print(o)
    }

    // formerly known as oGet.
    // callback is called when error occured.
    // 
    _o_get(url, params, callback){
        return new Promise((resolve, reject) => {
            axios.get(url, params)
                .then(res => {
                    resolve(res.data)
                }, err => {
                    reject(err)
                }).catch(err => {
                    reject(err)
                })
        })
    }

    _o_post(url, params, callback){
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(res => {
                    resolve(res.data)
                }, err => {
                    reject(err)
                }).catch(err => {
                    reject(err)
                })
        })
    }

    _o_put(url, params, callback){
        return new Promise((resolve , reject) => {
            axios.put(url ,param)
                .then(res => {
                    resolve(res.data)
                }, err => {
                    reject(err)
                }).catch(err => {
                    reject(err)
                })
        })
    }

    _o_delete(url, params, callback){
        return new Promise((resolve,reject) => {
            axios.delete(url,params)
                .then(res => {
                    resolve(res.data)
                },err => {
                    reject(err)
                }).catch(err => {
                    reject(err)
                })
        })
    }

    // Q: what's the different between find() and get() method here?
    // A: find will return an object array which is easily adapt to the list view.
    //    get only returns a single object which is easily used in object editor and object viewer.
    //    So the backend API implementation should reponsible to this difference.
    //
    find(relativeurl, params, callback)
    {
        remoteurl = this.baseurl + relativeurl 
        return this._o_get(remoteurl, params, callback)
    }

    get(relativeurl, params, callback)
    {
        remoteurl = this.baseurl + relativeurl 
        return this._o_get(remoteurl, params, callback)
    }
    
    post(relativeurl, params, callback)
    {
        remoteurl = this.baseurl + relativeurl 
        return this._o_post(remoteurl, params, callback)
    }

    update(relativeurl, params, callback)
    {
        remoteurl = this.baseurl + relativeurl 
        return this._o_post(remoteurl, params, callback)
    }

    updateobject(relativeurl, id, o, callback)
    {
        remoteurl = this.baseurl + relativeurl + id
        return this._o_post(remoteurl, o, callback)
    }
    
    delete(relativeurl, params, callback)
    {
        remoteurl = this.baseurl + relativeurl 
        return this._o_delete(remoteurl, params, callback)
    }

    deleteobject(relativeurl, id)
    {
        remoteurl = this.baseurl + relativeurl + id
        return this._o_delete(remoteurl, null, callback)
    }
    
    /*
    // 批量删除
    // ids is a object id list. It's array type
    deleteobjects( ids ){
        var ids = []
        $.each(this.selected, (i, user) => {
            ids.push(user.id);
        });
        ids = ids.join(",");
        return oRemove('http://127.0.0.1:5000/rest/anon/tasks/'+ids);
    },
    */
}