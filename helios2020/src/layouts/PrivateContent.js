import React, { Component } from 'react'
import UserContent from '../views/UserContent'
import ManagerContent from '../views/ManagerContent'
function UserState(props) {
    if (props.state === 'user'){
        return <UserContent />;
    }else if (props.state === 'manager'){
        return <ManagerContent />;
    }else{
        return false;
    }
}
class PrivateContent extends Component{
    render(){
        return (
            <UserState />
        );
    }
}

export default PrivateContent;