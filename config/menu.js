module.exports = [{
    name: '用户管理',
    icon: 'icon-home4',
    index: "1",
    class: 'user_icon',
    child: [
        {
            name: '用户',
            index: '/user'
        },
        {
            name: '订单',
            index: '/user/order'
        }
    ]
}, {
    name: '运营管理',
    icon: 'icon-spinner10 spinner',
    index: "2",
    class: 'operate_icon',
    child: [
        {
            name: '任务',
            index: '/manage'
        },
        {
            name: '库存',
            index: '/manage_stock'
        },
        {
            name: '统计',
            index: '/tongji'
        },
        {
            name: '用车',
            index: '/manage_car_list'
        },
    ]
}, {
    name: '资产管理',
    icon: 'icon-people',
    index: "3",
    class: 'zichan_icon',
    child: [
        {
            name: '车辆',
            index: '/assets_car'
        },
        {
            name: '维修',
            index: '/assets_repair'
        },
        {
            name: '保险',
            index: '/assets_safest'
        },
        {
            name: '供应商',
            index: '/assets_supplier'
        },
    ]
}, {
    name: '基础设置',
    icon: 'icon-sphere',
    index: "4",
    class: 'base_icon',
    child: [
        {
            name: '车型',
            index: '/base'
        },
        {
            name: '车库',
            index: '/base/garage'
        },
        {
            name: '费用',
            index: '/base/cost'
        },
        {
            name: '服务城市',
            index: '/base/city'
        },
        {
            name: '停车场',
            index: '/base/parking'
        },
    ]
},
];