import React, { Component } from 'react'
import './ErrorBoundary.css'

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = { hasError: false };
    }
    static getDervicedStateFromError(error){
        return { hasError: true };
    }
    render(){
        if(this.state.hasError){
            return(
                <div className='errorBoundary'>
                    <h3>系统出错，请联系管理员：yuan_lanyu@163.com</h3>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;