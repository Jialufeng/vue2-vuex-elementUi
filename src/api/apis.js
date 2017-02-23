import {
    urls
} from './urls';

// import notify from '../components/widgets/notify';
import { Notification } from 'element-ui';
// console.log(notify.methods.open());
const tmpl_loading = `<div class="overlay">
                            <i></i>
                        </div>`;

// const Server = "http://192.168.1.224/"
// const Server = "http://gpsapi.1mobility.cn/"
const Server = 'http://192.168.1.224:8070/';
// const Server = 'http://192.168.1.224:8077/';  // dev
// // const Server = 'http://app.gcarclub.com/'


// 权限对接
const AuthServer = 'http://192.168.1.223:8089/';//获取权限菜单 测试
// const AuthServer = 'http://securitypreapi.1mobility.cn/';//获取权限菜单 预生产
// const AuthServer = 'http://securityapi.1mobility.cn/';//获取权限菜单 生产

const AuthMgr = "http://192.168.1.247:9002/#login"; //权限的登录页
// const AuthMgr = "http://securitypre.1mobility.cn/#login"; //权限的登录页 预生产
// const AuthMgr = "http://security.1mobility.cn/#login"; //权限的登录页 生产

function Notify_success(msg) {
    Notification.success(msg)
}
function Notify_fail(msg) {
    Notification.error(msg)
}
function handle_invalid_token() {
    sessionStorage.setItem('prev', window.location.href);
    sessionStorage.removeItem('token');
    Notify_fail("登录超时，请重新登录");
        window.location.href = AuthMgr;
    return;
}



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

    _ajax(method, options, improt, serverurl) {
        let token = sessionStorage.getItem('token');
        return new Promise((resolve, reject) => {

            if (improt) {

                let formData = new FormData();

                for( let i in options ){
                    formData.append(i, options[i]);
                }
                
                $.ajax({
                    url: serverurl || this.cfg.url,
                    type: method,
                    data: formData,
                    processData: false,
                    contentType: false,
                    beforeSend: function (xhr) {
                        if (token !== null) {
                            xhr.setRequestHeader("HaiYi-Access-Token", token);
                        }
                    },
                    success: function (response) {
                        resolve(response);
                        if (response.code == '0000') {
                            response.data.errorList.forEach(item => {
                                Notify_fail(item.errorReason);
                            });
                            Notify_success("上传成功"+ response.data.successList.length+ "条");

                            document.getElementById('addForm').reset();
                            // Notify_success(response.message);
                        } else if (response.code === '1007') { //token 失效
                            handle_invalid_token();
                            return;
                        }  else {
                            Notify_fail(response.message);
                        }
                    },
                    error: function (response) {
                        reject(response);
                        Notify_fail("接口挂掉了哦！！！！！");
                    }

                });

            } else {

                if (serverurl) {
                    this.cfg.url = serverurl + this.url;
                }
                let tmp_cfg = $.extend(true, {}, this.cfg, {
                    type: method,
                    contentType: 'application/json;charset=UTF-8',
                    dataType: 'json',
                    // beforeSend: function (xhr) {
                    //     // console.log(xhr);
                    // },
                    beforeSend: function (xhr) {
                        if (token !== null) {
                            xhr.setRequestHeader("HaiYi-Access-Token", token);
                        }
                    },
                    error: function (response) {
                        reject(response);
                        Notify_fail("接口挂掉了哦！！！！！");
                    },
                    success: function (response) {
                        resolve(response);
                        if (response.code == '0000') {
                            // Notify_success(response.message);
                        } else if (response.code === '1007') { //token 失效
                            handle_invalid_token();
                            return;
                        }  else {
                            Notify_fail(response.message);

                        }
                    }
                });
                tmp_cfg.data = (method === 'GET' ? options : JSON.stringify(options));

                $.ajax(tmp_cfg);
            }
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

// GET 权限
class POSTAuth extends Ajax {
    constructor(url) {
        super(url)
    }
    fetch(options, improt) {
        return super._ajax("POST", options, improt, AuthServer)
    }
}

//HOME
//data_service_platform
export const file = new POST(urls.file);



// 权限
// export const user_roles = new POSTAuth(urls.user_roles);

// export {
//     AuthMgr
// };

const f = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123);
        }, 2000);
    });
};

const testAsync = async () => {
    const t = await f();
    console.log(t);
};

testAsync();
