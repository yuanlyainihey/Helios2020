import React, { Component } from 'react'
import { Form, Input } from 'antd'
import {  } from '@ant-design/icons'

class MsgUpdate extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Form>
                <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                </Form.Item>
            </Form>
        );
    }
}

export default MsgUpdate;