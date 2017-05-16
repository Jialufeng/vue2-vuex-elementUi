import {
    urls
} from './urls';

import { Notification } from 'element-ui';

const Server = 'http://192.168.1.224:8070/';
// // const Server = 'http://app.gcarclub.com/'

class Ajax {
    constructor(url) {
        this.url = url;

        this.cfg = {
            //type: method,
            url: Server + url,
            // data: JSON.stringify(options),
            // data: options,
            // contentType: 'application/json;charset=UTF-8',
            // dataType: 'json',
            // beforeSend: function (xhr) {},
            // error: function (response) {
            //     reject(response);
            // },
            // success: function (response) {
            //     resolve(response);
            // }
        }
    }

    _ajax(method, options, serverurl) {
        let token = sessionStorage.getItem('token');
        return new Promise((resolve, reject) => {

                if (serverurl) {
                    this.cfg.url = serverurl + this.url;
                }
                let tmp_cfg = $.extend(true, {}, this.cfg, {
                    type: method,
                    contentType: 'application/json;charset=UTF-8',
                    dataType: 'json',
            
                    beforeSend: function (xhr) {
                        if (token !== null) {
                            xhr.setRequestHeader("HaiYi-Access-Token", token); // 请求头
                        }
                    },
                    error: function (response) {
                        reject(response);
                        console.log("请求失败！")
                    },
                    success: function (response) {
                        resolve(response);
                       console.log("请求成功！")
                    }
                });
                tmp_cfg.data = (method === 'GET' ? options : JSON.stringify(options));

                $.ajax(tmp_cfg);
        });
    }
}
class GET extends Ajax {
    constructor(url) {
        super(url)
    }

    fetch(options) {
        return super._ajax("GET", options)
    }

}
class POST extends Ajax {
    constructor(url) {
        super(url)
    }

    fetch(options, improt) {
        return this._ajax('POST', options, improt)
    }
}

//HOME
//data_service_platform
export const file = new GET(urls.file);  //  get请求
export const files = new POST(urls.file); // post请求



