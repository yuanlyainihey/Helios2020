import React, { Component } from 'react'
import UserContent from  '../views/UserContent'
import MsgUpdate from '../views/MsgUpdate'

class PublicContent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{display: "flex", height: '100%'}}>
                <MsgUpdate />
            </div>
            
        );
    }
}

export default PublicContent;