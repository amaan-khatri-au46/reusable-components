import { lazy } from 'react'

import type { Routes } from '@/@types/routes'
import { ADMIN, USER } from '@/constants/roles.constant'
import { PAGES_PREFIX_PATH } from '@/constants/route.constant'

const pagesRoute: Routes = [
  {
    key: 'pages.welcome',
    path: `${PAGES_PREFIX_PATH}/welcome`,
    component: lazy(() => import('@/views/pages/Welcome')),
    authority: [ADMIN, USER],
  },
  {
    key: 'pages.accessDenied',
    path: '/access-denied',
    component: lazy(() => import('@/views/pages/AccessDenied')),
    authority: [ADMIN, USER],
  },
]

export default pagesRoute
