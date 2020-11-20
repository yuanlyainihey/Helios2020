import React, { Component, useState } from 'react'
import { Input, Avatar, Tooltip, Button, Modal, Form, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const tip = <span>点击登录</span>

const ModalComponent = () => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = () => {
        setVisible(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 1000);
    };
    const handleCancel = () => {
        setVisible(false);
    };
    return (
        <Tooltip title={tip} color='gray' placement='right'>
            <Button type='link' icon={<Avatar icon={<UserOutlined />}></Avatar>} onClick={showModal}></Button>
            <Modal title='用户登录'
            visible={visible}
            footer={[]}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}>
                <Form style={{width:'300px', margin: '15px 100px'}}>
                    <Form.Item 
                    name="username"
                    rules={[{ required: true, message: '请输入你的用户名' }]}>
                        <Input prefix={<UserOutlined />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入你的密码' }]}>
                        <Input
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="密码"/>
                    </Form.Item>
                    <Form.Item style={{display: 'flex', flexDirection: 'col'}}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>
                        <a href="" style={{float: 'right'}}>忘记密码</a>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width: '100%' }}>登录</Button>
                        <Button type="link">没有账号？去注册...</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Tooltip>
    );
};

class VisitorTitle extends Component{
    render(){
        // return <ModalComponent />;
        return (
                <ModalComponent />
        );
    }
}

export default VisitorTitle;