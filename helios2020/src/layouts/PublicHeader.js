import React, { Component } from 'react'
import { Row, Col, Divider, Input } from 'antd'
import { SlackOutlined } from '@ant-design/icons'

import VisitorTitle from '../views/VisitorTitle'
import UserTitle from '../views/UserTitle'
import ManagerTitle from '../views/ManagerTitle'

const ColStyle = { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
const IconStyle = { fontSize: '35px', color: 'RoyalBlue' }
const SearchStyle = { margin:'0 75px' }
const { Search } = Input

function UserState(props){
    if (props.state === 'visitor'){
        return <VisitorTitle />;
    }else if (props.state == 'user'){
        return <UserTitle />;
    }else if (props.state === 'manager'){
        return <ManagerTitle />
    }
}
class PublicHeader extends Component{
    constructor(props){
        super(props);
        this.state = { autoLogin: false, userState: 'user' }
    }
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
                    <Search placeholder="请搜索..." onSearch={ val => console.log(val) } enterButton style={SearchStyle} />
                </Col>
                <Col span={4} style={ColStyle}>
                    <UserState state={this.state.userState} />
                </Col>
            </Row>
        );
    }
}

export default PublicHeader;