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
    id: 4,
    label: 'MENUITEMS.ARTIKEL.TEXT',
    icon: 'ri-newspaper-fill',
    link: '/artikel',
  },
  {
    id: 5,
    label: 'MENUITEMS.PEMERINTAHAN.TEXT',
    icon: 'ri-government-fill',
    subItems: [
      {
        id: 3,
        label: 'MENUITEMS.PEMERINTAHAN.LIST.VISIMISI',
        link: '/pemerintahan/visi-misi',
        parentId: 5
      },
      {
        id: 4,
        label: 'MENUITEMS.PEMERINTAHAN.LIST.STRUKTUR',
        link: '/pemerintahan/struktur',
        parentId: 5
      },
    ]
  },
  {
    id: 5,
    label: 'MENUITEMS.DATADESA.TEXT',
    icon: 'ri-book-2-fill',
    subItems: [
      {
        id: 3,
        label: 'MENUITEMS.DATADESA.LIST.DESA',
        link: '/data-desa/desa',
        parentId: 5
      },
      {
        id: 4,
        label: 'MENUITEMS.DATADESA.LIST.PENDUDUK',
        link: '/data-desa/penduduk',
        parentId: 5
      },
      {
        id: 3,
        label: 'MENUITEMS.DATADESA.LIST.WILAYAH',
        link: '/data-desa/wilayah',
        parentId: 5
      },
      {
        id: 4,
        label: 'MENUITEMS.DATADESA.LIST.ANGGARAN',
        link: '/data-desa/anggaran',
        parentId: 5
      },
    ]
  },
];
