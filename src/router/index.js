// import { lazy } from 'react';

// export default [
//     {
//         title: '首页',
//         key: 'home',
//         exact: true,
//         path: '/',
//         component: lazy(() => import(/* webpackChunkName: 'Home' */'pages/Home')),
//     },
//     { 
//         title: '个人中心页',
//         path: '/user',
//         key: 'user',
//         exact: true,
//         component: lazy(() => import(/* webpackChunkName: 'User' */'pages/User')),
//     },
//     { 
//         title: '详情页',
//         key: 'detail',
//         exact: true,
//         path: '/detail',
//         component: lazy(() => import(/* webpackChunkName: 'Detail' */'pages/Detail')),
//     },
// ]

import Home from 'pages/Home';
import User from 'pages/User';
import Detail from 'pages/Detail';

export default [
    {
        title: '首页',
        key: 'home',
        exact: true,
        path: '/',
        component: Home,
    },
    { 
        title: '个人中心页',
        path: '/user',
        key: 'user',
        exact: true,
        component: User,
    },
    { 
        title: '详情页',
        key: 'detail',
        exact: true,
        path: '/detail',
        component: Detail,
    },
];
