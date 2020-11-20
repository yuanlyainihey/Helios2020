import React, { Component } from 'react'

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class UserTitle extends Component{
    constructor(props){
        super(props);
        this.state = { visible: false, userState: 'user' }
    }
    handleMenuClick = (e) => {
        this.setState({ visible: false });
        console.log(e.key)
    }
    handleVisibleChange = (flag) => {
        this.setState({ visible: flag });
    }
    render(){
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">信息修改</Menu.Item>
                <Menu.Item key="2">我的投票</Menu.Item>
                <Menu.Item key="3">我的消息</Menu.Item>
                <Menu.Item key="4">退出登录</Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={menu}
            onVisibleChange={this.handleVisibleChange}
            visible={this.state.visible}>
                <a href="#" style={{ color: 'black', wordSpacing: '10px' }}>个人中心 <DownOutlined /></a>
            </Dropdown>
        );
    }
}

export default UserTitle;