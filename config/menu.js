module.exports = [{
    name: '首页',
    icon: 'icon-home4',
    index: "1",
    class: 'user_icon',
    child: [
        {
            name: '首页',
            index: '/home'
        }
    ]
},{
    name: '一级',
    icon: 'icon-home4',
    index: "3",
    class: 'user_icon',
    child: [
        {
            name: '一',
            index: '/user'
        },
        {
            name: '二级',
            index: '/user/userTwo'
        }
    ]
}, 
];