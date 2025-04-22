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
    subItems: [
      {
        id: 6,
        label: 'MENUITEMS.ARTIKEL.LIST.AGENDA',
        link: '/artikel/agenda',
        parentId: 5
      },
      {
        id: 7,
        label: 'MENUITEMS.ARTIKEL.LIST.BERITA',
        link: '/artikel/berita',
        parentId: 5
      },
    ]
  },
  {
    id: 5,
    label: 'MENUITEMS.PEMERINTAHAN.TEXT',
    icon: 'ri-government-fill',
    subItems: [
      {
        id: 8,
        label: 'MENUITEMS.PEMERINTAHAN.LIST.VISIMISI',
        link: '/pemerintahan/visi-misi',
        parentId: 5
      },
      {
        id: 9,
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
        id: 10,
        label: 'MENUITEMS.DATADESA.LIST.DESA',
        link: '/data-desa/desa',
        parentId: 5
      },
      {
        id: 11,
        label: 'MENUITEMS.DATADESA.LIST.PENDUDUK',
        link: '/data-desa/penduduk',
        parentId: 5
      },
      {
        id: 12,
        label: 'MENUITEMS.DATADESA.LIST.WILAYAH',
        link: '/data-desa/wilayah',
        parentId: 5
      },
      {
        id: 13,
        label: 'MENUITEMS.DATADESA.LIST.ANGGARAN',
        link: '/data-desa/anggaran',
        parentId: 5
      },
    ]
  },
];
