import { Menu, Button, Icon } from 'antd';
import React, { useState } from 'react';
import { RouteChildrenProps } from 'react-router'
import routers from '../../../router/index'
import { Link } from 'react-router-dom'

function renderMenuItem(menu: any) {
    return(
        <Menu.Item key={menu.key}>
            <Link to={menu.key}>
                {menu.icon&&<Icon type={menu.icon}/>}
                <span>{menu.title}</span>
            </Link>
        </Menu.Item>
    )
}

function renderSubMenu(subMenu: any) {
    return(
        <Menu.SubMenu 
            key={subMenu.key}
            title={
                <span>
                    {subMenu.icon && <Icon type={subMenu.icon} />}
                    <span>{subMenu.title}</span>
                </span>
            }
        >
            {subMenu.subs.map((menu: any) => renderMenuItem(menu))}
        </Menu.SubMenu>
    )
}

class Navside extends React.Component<object, object> {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleSelect = () => {
  }

  render() {
    return (
      <div style={{ width: 256 }}>
        {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            {React.createElement(this.state.collapsed ? '展开' : '收起')}
        </Button> */}
        {routers.menus.map((item, index) => (
            <Menu>
                {item.subs
                    ? renderSubMenu(item)
                    : renderMenuItem(item)}
            </Menu>
        ))}
      </div>
    );
  }
}

export default Navside;