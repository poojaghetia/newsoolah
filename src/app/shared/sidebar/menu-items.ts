import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-view-dashboard',
    class: '',
    extralink: false,
    submenu: []
  },
  {

    path: '/admin/cleaner',
    title: 'Cleaner',
    icon: 'mdi mdi-account',
    class: '',
    extralink: false,
    submenu: []
  },
  {

    path: '/admin/customer',
    title: 'Customer',
    icon: 'mdi mdi-bank',
    class: '',
    extralink: false,
    submenu: []
  },
];
