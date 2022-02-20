import { NavbarItemProps } from './typing';

export const NavbarList: NavbarItemProps[] = [
  {
    navkey: 'customerProfile',
    name: '客户主档',
    isNavbar: true,
    icon: 'FontSizeOutlined',
    children: [
      {
        navkey: 'customerProfile1',
        name: '客户主档1',
      },
    ],
  },
  // {
  //   navkey: 'basic',
  //   name: '基础架构',
  //   children: [
  //     {
  //       navkey: 'city',
  //       name: '城市',
  //       listPage: <City />,
  //       detailPage: <CityDetail />,
  //     },
  //     {
  //       navkey: 'plate',
  //       name: '板块',
  //       listPage: <Plate />,
  //       detailPage: <PlateDetail />,
  //     },
  //     {
  //       navkey: 'headquartersCompany',
  //       name: '总公司',
  //       listPage: <HeadCompany />,
  //       detailPage: <HeadComponyDetail />,
  //     },
  //     {
  //       navkey: 'areaManageCompany',
  //       name: '区域管理公司',
  //       listPage: <AreaManageCompany />,
  //       detailPage: <AreaManageCompanyDetail />,
  //     },
  //     {
  //       navkey: 'manageCompany',
  //       name: '项目管理公司',
  //       listPage: <ManageCompany />,
  //       detailPage: <ManageCompanyDetail />,
  //     },
  //     {
  //       navkey: 'projectList',
  //       name: '项目列表',
  //       listPage: <ProjectList />,
  //       detailPage: <ProjectListDetail />,
  //     },
  //     {
  //       navkey: 'building',
  //       name: '楼栋',
  //       listPage: <Building />,
  //       detailPage: <BuildingDetail />,
  //     },
  //     {
  //       navkey: 'room',
  //       name: '房间',
  //       listPage: <Room />,
  //       detailPage: <RoomDetail />,
  //     },
  //   ],
  // },
  {
    navkey: 'userInfo',
    name: '批量更新客户信息',
    isNavbar: true,
    icon: 'FontSizeOutlined',
    children: [
      {
        navkey: ':id',
        name: '批量更新客户信息详情页',
        children: [
          {
            navkey: ':id1',
            name: '详情页',
          },
        ],
      },
    ],
  },
];
