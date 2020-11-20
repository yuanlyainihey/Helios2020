import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Table, Button, DatePicker } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'

const { RangePicker } = DatePicker;
const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
const columns = [
    {
        title: '标题',
        dataIndex: 'title'
    },
    {
        title: '时间限制',
        dataIndex: 'timeLimit',
        filters: [
            {
                text: <RangePicker showTime format="YYYY-MM-DD HH:mm" />,
                value: <RangePicker showTime format="YYYY-MM-DD HH:mm" />,
            },
        ]
    },
    {
        title: '创建时间',
        dataIndex: 'initTime',
        sorter: (a, b) => { if(a < b){ return -1 }else{ return 1 } }
    }
];

const dataSource = [];
for(let i = 1; i <= 50; i++){
    dataSource.push({
        key: i,
        title: `title - ${i}`,
        timeLimit: `2020/11/18 - 2020/11/20 - {${i}}`,
        initTime: `2020/1/${i}`
    });
}

class UserContent extends Component{
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
      };
    
    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };
    render(){
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <Layout>
                <Sider width={200}>
                    <Menu mode="inline" style={{ height: '100%' }} defaultSelectedKeys={['2']} defaultOpenKeys={['vote', 'msg']}>
                        <Menu.Item key='1' icon={<UserOutlined />}>信息修改</Menu.Item>
                        <SubMenu key='vote' icon={<LaptopOutlined />} title='我的投票'>
                            <Menu.Item key='2'>未参与投票</Menu.Item>
                            <Menu.Item key='3'>已参与投票</Menu.Item>
                        </SubMenu>
                        <SubMenu key='msg'  icon={<NotificationOutlined />} title='我的消息'>
                            <Menu.Item key='4'>未读消息</Menu.Item>
                            <Menu.Item key='5'>历史消息</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Breadcrumb style={{ display: 'flex', margin: '15px 50px 0 50px' }}>
                        <Breadcrumb.Item>我的投票</Breadcrumb.Item>
                        <Breadcrumb.Item>已参与投票</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ margin: '5px 50px 15px 50px', padding: '15px 30px', backgroundColor: 'white' }}>
                        <Button
                        style={{ float: "left", marginBottom: '10px' }}
                        type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                            删除
                        </Button>
                        <span style={{ float: 'left', margin: '5px 10px' }}>
                            {hasSelected ? `已选 ${selectedRowKeys.length} 个投票` : ''}
                        </span>
                        <Table
                        rowSelection={{ type: 'checkbox', ...rowSelection }}
                        columns={columns}
                        dataSource={dataSource}
                        size="small"
                        />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default UserContent;