import React, { Component } from 'react'

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class ManagerTitle extends Component{
    constructor(props){
        super(props);
        this.state = { userState: 'manager' }
    }
    state = {
        visible: false,
    };
    handleMenuClick = (e) => {
        if (e.key === '3') {
            this.setState({ visible: false });
        }
    }
    handleVisibleChange = (flag) => {
        this.setState({ visible: flag });
    }
    render(){
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">信息修改</Menu.Item>
                <Menu.Item key="2">投票管理</Menu.Item>
                <Menu.Item key="3">退出登录</Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={menu}
            onVisibleChange={this.handleVisibleChange}
            visible={this.state.visible}>
            <a href="#" style={{ color: 'black', wordSpacing: '10px' }}>管理中心 <DownOutlined /></a>
        </Dropdown>
        );
    }
}

export default ManagerTitle;