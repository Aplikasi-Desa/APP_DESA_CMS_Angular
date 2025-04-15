import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: 'ri-apps-fill',
    link: '/',
  },
  {
    id: 3,
    label: 'MENUITEMS.PENDES.TEXT',
    icon: 'ri-team-fill',
    link: '/pendes',
  },
  {
    id: 4,
    label: 'MENUITEMS.MONITORING.TEXT',
    icon: 'ri-customer-service-2-fill',
    link: '/monitoring',
  },
  {
    id: 5,
    label: 'MENUITEMS.HAKAKSES.TEXT',
    icon: 'ri-shield-keyhole-fill',
    link: '/hakakses',
  },
];
