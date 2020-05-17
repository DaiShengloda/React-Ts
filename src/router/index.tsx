export default {
    menus: [
        // 菜单相关路由
        { key: '/main/one/todo', title: '首页', icon: 'bank', component: 'HomeData' },
        { key: '/main/ui/buttons', title: '按钮', icon: 'book', component: 'Buttons' },
        { key: '/main/ui/icons', title: '图标', icon: 'bulb', component: 'Icons' },
        { key: '/main/ui/spins', title: '加载中', icon: 'bug', component: 'Spins' },
        { key: '/main/ui/modals', title: '对话框', icon: 'audio', component: 'Modals' },
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
        {
            key: '/main/study',
            title: '学习',
            icon: 'highlight',
            subs: [
                {
                    key: '/main/study/hook',
                    title: 'Hook',
                    component: 'Hook',
                },
            ],
        },
    ],
    // others: [], // 非菜单相关路由
};