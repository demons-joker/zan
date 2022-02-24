import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true,
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
]
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index'),
        meta: {
          title: '首页',
          icon: 'home-4-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/task',
    component: Layout,
    redirect: '/task/task_list',
    alwaysShow: true,
    meta: {
      title: '任务管理',
      icon: 'apps-line',
    },
    children: [
      {
        path: 'task_list',
        name: 'task_list',
        component: () => import('@/views/task/list'),
        meta: {
          title: '任务列表',
          icon: 'table-2',
        },
      },
      {
        path: 'task_diff',
        name: 'task_diff',
        component: () => import('@/views/task/diff'),
        meta: {
          title: '差量任务',
          icon: 'remixicon-line',
        },
      },
      {
        path: 'task_remove',
        name: 'task_remove',
        component: () => import('@/views/task/remove'),
        meta: {
          title: '删除任务',
          icon: 'remixicon-line',
        },
      },
    ],
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/user_list',
    alwaysShow: true,
    meta: {
      title: '用户管理',
      icon: 'user-3-fill',
    },
    children: [
      {
        path: 'user_list',
        name: 'user_list',
        component: () => import('@/views/user/list'),
        meta: {
          title: '用户列表',
          icon: 'table-2',
        },
      },
      {
        path: 'user_withdraw',
        name: 'user_withdraw',
        component: () => import('@/views/user/withdraw'),
        meta: {
          title: '提现列表',
          icon: 'remixicon-line',
        },
      },
    ],
  },
  {
    path: '/team',
    component: Layout,
    redirect: '/team/team_list',
    alwaysShow: true,
    meta: {
      title: '团队管理',
      icon: 'user-3-fill',
    },
    children: [
      {
        path: 'team_list',
        name: 'team_list',
        component: () => import('@/views/team/list'),
        meta: {
          title: '团队列表',
          icon: 'table-2',
        },
      },
      {
        path: 'team_apple',
        name: 'team_apple',
        component: () => import('@/views/team/apple'),
        meta: {
          title: '苹果团队',
          icon: 'remixicon-line',
        },
      },
    ],
  },
  {
    path: '/business',
    component: Layout,
    redirect: '/business/business_list',
    meta: {
      title: '业务管理',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'business_list',
        name: 'business_list',
        component: () => import('@/views/business/list'),
        meta: {
          title: '业务管理',
          icon: 'home-4-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/community',
    component: Layout,
    redirect: '/community/community_list',
    meta: {
      title: '社区管理',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'community_list',
        name: 'community_list',
        component: () => import('@/views/community/list'),
        meta: {
          title: '社区管理',
          icon: 'home-4-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/platform',
    component: Layout,
    redirect: '/platform/platform_list',
    meta: {
      title: '平台收益',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'platform_list',
        name: 'platform_list',
        component: () => import('@/views/platform/list'),
        meta: {
          title: '平台收益',
          icon: 'home-4-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/*',
    redirect: '/404',
    hidden: true,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router
