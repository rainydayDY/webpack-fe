import { lazy } from 'react';

export default [
    {
        tile: '首页',
        key: 'home',
        exact: true,
        path: '/',
        component: lazy(() => import(/* webpackChunkName: 'Home' */'pages/Home')),
    },
    { 
        tile: '个人中心页',
        path: '/user',
        key: 'user',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'User' */'pages/User')),
    },
    { 
        tile: '详情页',
        key: 'detail',
        exact: true,
        path: '/detail',
        component: lazy(() => import(/* webpackChunkName: 'Detail' */'pages/Detail')),
    },
]