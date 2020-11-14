import React, { Component, useState } from 'react'
import { Row, Col, Divider, Input, Avatar, Tooltip, Button, Modal, Form, Checkbox } from 'antd'
import { SlackOutlined, UserOutlined, LockOutlined } from '@ant-design/icons'

const ColStyle = { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
const IconStyle = { fontSize: '35px', color: 'RoyalBlue' }
const SearchStyle = { margin:'0 75px' }
const { Search } = Input

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
        <Tooltip title={tip} color='RoyalBlue' placement='right'>
            <Button style={ColStyle} type='link' icon={<Avatar icon={<UserOutlined />}></Avatar>} onClick={showModal}>
                <h3 style={{marginLeft: '10px', fontFamily: '方正舒体', color: 'DarkGray' }}>游客状态</h3>
            </Button>
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
                            <a href="">没有账号？去注册...</a>
                        </Form.Item>
                    </Form>
            </Modal>
        </Tooltip>
    );
};

class PublicHeader extends Component{
    render(){
        return(
            <Row>
                <Col span={4} style={ColStyle}>
                    <SlackOutlined style={IconStyle} spin />
                    <h2 style={{margin: '0 30px', color: 'RoyalBlue'}}>VOTING</h2>
                </Col>
                <Col span={1} style={ColStyle}>
                    <Divider type="vertical" style={{fontSize: '40px'}} />
                </Col>
                <Col span={15} style={ColStyle}>
                    <Search placeholder="请搜索..." onSearch={value => console.log(value)} enterButton style={SearchStyle} />
                </Col>
                <Col span={4} style={ColStyle}>
                    <ModalComponent />
                </Col>
            </Row>
        );
    }
}

export default PublicHeader;