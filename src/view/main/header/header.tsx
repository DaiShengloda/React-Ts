import React from 'react'
import { connect } from 'react-redux'
import { Global } from '../../../store/interface'
import { Icon, Dropdown, Menu, Avatar } from 'antd'
import './header.scss'

const menu = (
    <Menu>
        <Menu.Item key="0">个人中心</Menu.Item>
        <Menu.Item key="1">功能试用</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">退出</Menu.Item>
    </Menu>
)
  
const mapStateToProps = (state: any) => {
    return {
        global: state.global,
    }
}

interface P {
    global: Global
}

interface S {
    dropStatus: string
}

class Header extends React.Component<P, S> {
    constructor(props: P) {
        super(props)
        this.state = {
            dropStatus: 'down'
        }
    }

    componentDidMount() {}

    dropVisibleChange = (visible: boolean) => {
        const status = visible ? 'up': 'down'
        this.setState({dropStatus: status})
    }

    render() {
        return(
            <div className="header">
                <div className="header-icon">
                    <Icon type="github" />
                    <span>云英</span>
                </div>
                <span className="header-name">{this.props.global.shop_dict.current_shop_name}</span>
                <Dropdown 
                    overlay={menu} 
                    trigger={['click']}
                    placement="bottomRight"
                    onVisibleChange={this.dropVisibleChange}
                >
                    <div className="header-drop">
                        <Avatar size={30} src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                        <div>
                            <span>{this.props.global.user_info.nickname}</span>
                            <span>{this.props.global.user_info.phone}</span>
                        </div>
                        <Icon type={this.state.dropStatus} />
                    </div>
                </Dropdown>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Header)