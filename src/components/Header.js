import React from 'react'
import Clock from 'react-live-clock';

const Header = () => {
    return (
        <div className="header">
            <div className="time"><Clock />  </div>
            <div className="top-block">
                <div className="line-top"></div>
                <div className="line-bottom"></div>
                <div className="camera"></div>
            </div>
            <div className="icons">
                <i className="fas fa-wifi"></i>
                <i className="fas fa-battery-three-quarters"></i>
            </div>
            <h1 className="title">Task Manager</h1>
        </div>
    )
}

export default Header
