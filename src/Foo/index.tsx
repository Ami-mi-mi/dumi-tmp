import React, { useState, useMemo } from 'react';
import { Menu, Button } from 'antd';
import {
  CaretUpOutlined,
  CaretDownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FontSizeOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';
import { NavbarList } from './mock';

const { SubMenu } = Menu;

export default ({ title }: { title: string }) => {
  const [collapsed, setCollapsed] = useState(false);

  const MenuItem = useMemo(() => {
    const result = (navData: any) => {
      return navData.reduce((acc: React.ReactNode[], item: any) => {
        if (item.children && item.children?.length > 0) {
          acc.push(
            <Menu.SubMenu
              key={item.navkey}
              icon={<FontSizeOutlined />}
              title={item.name}
            >
              {result(item.children)}
            </Menu.SubMenu>,
          );
        } else {
          acc.push(
            <Menu.Item key={item.navkey} icon={<PieChartOutlined />}>
              {item.name}
            </Menu.Item>,
          );
        }
        return acc;
      }, []);
    };

    return result(NavbarList);
  }, [NavbarList]);

  // const menuChange = () => {
  //   console.log(collapsed)
  //   setCollapsed(!collapsed);
  // }

  const expandIconHandler = Props => {
    if (Props && Props.isOpen) {
      return <CaretUpOutlined />;
    } else {
      return <CaretDownOutlined />;
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        expandIcon={expandIconHandler}
      >
        {MenuItem}
      </Menu>
    </>
  );
};
