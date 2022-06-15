import React from 'react'
import './../assets/css/TopNavigation.css'
import logo from './../assets/images/logo.svg';
import menu from './../assets/images/menu.svg';

const TopNavigation = () => {
    return (
        <div className='topnav-container'>
            <div className='topnav-items'>
                <div className='topnav-left'>
                    <img src={logo} alt="logo" />
                    <img src={menu} alt="menu" />
                </div>
                <div className='topnav-right'>
                    <div className='bg_user' />
                    <div className='user_initial'><span>JD</span></div>
                    <div className="username">username</div>
                </div>
            </div>
        </div>
    )
}

export default TopNavigation