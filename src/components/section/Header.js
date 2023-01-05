import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
import { header } from '../../profile'

const Header = () => {
    const toggleDarkMode = (e) =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        document.getElementById('not-dark2').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for(let i = 0; i < x.length; i += 1) {
            x.item(i).classList.toggle("inverse-dark");
        }
        
        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
        }

    return (
        <div id='header-background'>
            <div className="Header">
                <label className="switch">
                    <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <div className="container">
                <div className="box">
                <div className="title">
                    <span className="block"></span>
                        <h1>{ header.name}<span></span></h1>
                </div>

                <div className="role">
                    <div className="block"></div>
                    <p>Welcome to my portfolio :）</p>
                </div>
                </div>
            </div>
            <HeaderButton/>
            </div>
        </div>
    )
    
}

export default Header;