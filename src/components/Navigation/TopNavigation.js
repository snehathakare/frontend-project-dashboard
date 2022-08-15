import React from 'react'
import './../../assets/css/TopNavigation.css'
import logo from './../../assets/images/logo.svg';
import menu from './../../assets/images/menu.svg';

const TopNavigation = () => {
    return (
        <div className='top-nav-container'>
            <div className='top-nav-left'>
                <img className='topnav-logo' src={logo} alt="logo" />
                <img className='topnav-menu' src={menu} alt="menu" />
            </div>
            <div className='topnav-right'>
                <div className='bg_user' />
                <div className='user_initial'><span>JD</span></div>
                <div className="username">username</div>
            </div>
        </div>
    )
}

export default TopNavigation