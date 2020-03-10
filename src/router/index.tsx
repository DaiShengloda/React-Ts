export default {
    menus: [
        // 菜单相关路由
        { key: '/main/one/todo', title: '首页', icon: 'mobile', component: 'Todo' },
        { key: '/main/ui/buttons', title: '按钮', icon: 'mobile', component: 'Buttons' },
        { key: '/main/ui/icons', title: '图标', icon: 'mobile', component: 'Icons' },
        { key: '/main/ui/spins', title: '加载中', icon: 'mobile', component: 'Spins' },
        { key: '/main/ui/modals', title: '对话框', icon: 'mobile', component: 'Modals' },
        {
            key: '/main/animation',
            title: '动画',
            icon: 'rocket',
            subs: [
                {
                    key: '/main/animation/basicAnimations',
                    title: '基础动画',
                    component: 'BasicAnimations',
                },
                {
                    key: '/main/animation/exampleAnimations',
                    title: '动画案例',
                    component: 'ExampleAnimations',
                },
            ],
        },
        // {
        //     key: '/main/table',
        //     title: '表格',
        //     icon: 'copy',
        //     subs: [
        //         { key: '/main/table/basicTable', title: '基础表格', component: 'BasicTable' },
        //         { key: '/main/table/advancedTable', title: '高级表格', component: 'AdvancedTable' },
        //         {
        //             key: '/main/table/asynchronousTable',
        //             title: '异步表格',
        //             component: 'AsynchronousTable',
        //         },
        //     ],
        // },
        // {
        //     key: '/main/chart',
        //     title: '图表',
        //     icon: 'area-chart',
        //     subs: [
        //         { key: '/main/chart/echarts', title: 'echarts', component: 'Echarts' },
        //         { key: '/main/chart/recharts', title: 'recharts', component: 'Recharts' },
        //     ],
        // },
        // {
        //     key: '/subs4',
        //     title: '页面',
        //     icon: 'switcher',
        //     subs: [{ key: '/login', title: '登录' }, { key: '/404', title: '404' }],
        // },
        // {
        //     key: '/main/auth',
        //     title: '权限管理',
        //     icon: 'safety',
        //     subs: [
        //         { key: '/main/auth/basic', title: '基础演示', component: 'AuthBasic' },
        //         {
        //             key: '/main/auth/routerEnter',
        //             title: '路由拦截',
        //             component: 'RouterEnter',
        //             auth: 'auth/testPage',
        //         },
        //     ],
        // },
        // {
        //     key: '/main/cssModule',
        //     title: 'cssModule',
        //     icon: 'star',
        //     component: 'Cssmodule',
        // },
        // {
        //     key: '/main/extension',
        //     title: '功能扩展',
        //     icon: 'bars',
        //     subs: [
        //         {
        //             key: '/main/extension/queryParams',
        //             title: '问号形式参数',
        //             component: 'QueryParams',
        //             query: '?param1=1&param2=2',
        //         },
        //     ],
        // },
    ],
    // others: [], // 非菜单相关路由
};