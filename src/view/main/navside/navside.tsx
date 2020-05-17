import { Menu, Button, Icon, Layout } from 'antd';
import React, { useState } from 'react';
import routers from '../../../router/index'
// import { Link, useLocation } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Link,
    withRouter
  } from "react-router-dom"

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

interface SelectItem {
    item: any;
    key: string;
    keyPath: string;
    selectedKeys: any;
    domEvent: any;
}

interface _S {
    collapsed: boolean;
    selectedKeys: string;
}

interface _P {

}

class Navside extends React.Component<any, _S> {
    constructor(props: any) {
        super(props)
        this.state = {
            collapsed: false,
            selectedKeys: '/main/one/todo',
        }
        
    }

    componentDidMount() {
        const { location } = this.props
        this.setState({
            selectedKeys: location.pathname
        })
    }
    

    toggleCollapsed = (collapsed: boolean): void => {
        this.setState({
            collapsed: collapsed,
        });
    };

    handleSelect = (data: any): void => {
        const { key } = data
        this.setState({
            selectedKeys: key,
        });
    };

    render() {
        return (
            <Layout.Sider 
                breakpoint="lg"
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.toggleCollapsed}
            >
                {routers.menus.map((item, index) => (
                    <Menu
                        key={index}
                        selectedKeys={[this.state.selectedKeys]}
                        mode="inline"
                        theme="dark"
                        onSelect={this.handleSelect}
                    >
                        {item.subs
                            ? renderSubMenu(item)
                            : renderMenuItem(item)}
                    </Menu>
                ))}
            </Layout.Sider>
        );
    }
}

export default withRouter(Navside);