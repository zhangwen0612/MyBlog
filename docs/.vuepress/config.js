const path = require('path')
module.exports = {
    head:[
        ["link", { rel: "stylesheet", href: "styles/index.styl" }],
        ['link',{rel:'icon',href:'favicon.ico'}]
    ],
    theme: 'reco',
    title: 'Coder Wen',
    author: 'Coder Wen',

    themeConfig: {
        //首页验证
        // keyPage: {
        //     keys: ['e10adc3949ba59abbe56e057f20f883e'], // 1.3.0 版本后需要设置为密文
        //     color: '#42b983', // 登录页动画球的颜色
        //     lineColor: '#42b983' // 登录页动画线的颜色
        // },
        //关闭腾讯公益
        noFoundPageByTencent: false,
        //风格
        type: 'blog',
        authorAvatar: '/lg.png',
        //导航
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '前端',
                link: '',
                items: [{
                        text: 'HTML5',
                        link: '/webfront/html'
                    },
                    {
                        text: 'CSS3',
                        link: '/webfront/css'
                    },
                    {
                        text: 'JavaScript',
                        link: '/webfront/js'
                    },
                    {
                        text: 'Vue',
                        link: '/webfront/vue'
                    }
                ]
            },
            {
                text: '.NET',
                link: '',
                items: [{
                        text: 'C#基础',
                        link: '/csharp/cshape/'
                    }, {
                        text: 'ASP.NET MVC',
                        link: '/csharp/mvc/'
                    }, {
                        text: 'ASP.NET Core MVC',
                        link: '/csharp/core/'
                    }

                ]
            },
            {
                text: '人才库',
                link: '#',
                items: [{
                        text: '河南科技大学',
                        link: '/student/keda/'
                    },
                    {
                        text: '洛阳职业技术学院',
                        link: '/student/luozhi/'
                    }
                ]
            },
            {
                text: '面试',
                link: '',
            },
        ],
        //侧边栏
        subSidebar: 'auto', //自动生成子侧边栏
        //友情链接
        friendLink: [{
                title: '康辉软件',
                desc: '一家专业从事计算机软件人才培训的机构，始终坚持诚信至上，学员为本，质量第一的原则，以关心学生，和谐发展的管理理念，打造一流的师资培训队伍，完善的教学设施，真是事项高薪就业的宗旨。',
                link: 'http://www.kanghuisw.com/',
                logo: 'http://www.kanghuisw.com/Content/images/logo.png'
            },
            {
                title: 'vuepress-theme-reco',
                desc: '一个机遇vuepress简洁、漂亮的博客主题',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: 'Vue',
                desc: '一套用于构建用户界面的渐进式框架',
                link: 'https://cn.vuejs.org/',
                logo: 'https://cn.vuejs.org/images/logo.svg'
            }
        ]

    }
}