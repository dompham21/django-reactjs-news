import React, { useState, useRef } from 'react'
import logo from '../../Assets/Images/logo.png';
import { Input } from 'antd';
import LiMenuHidden from './LiMenuHidden';
import { Link } from 'react-router-dom';

const { Search } = Input;

function Header() {
    const [actived, setActived] = useState(false);
   const handleShowDropDown =  () => {
        setActived(!actived);
   }
    return (
        <div className="header flex flex-ai-c flex-jc-sb">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo}/>
                </Link>
            </div>
            <div className="header__responsive">
                <div className="btn-show" onClick={handleShowDropDown}>
                    <span className="ba bar-1"></span>
                    <span className="ba bar-2"></span>
                    <span className="ba bar-3"></span>
                </div>
                <ul className={`hidden-menu${actived ? " active": ""}`}>
                    <LiMenuHidden title="Home" subItem={["Home Two", "Home One"]}/>
                    <LiMenuHidden title="Features" subItem={["Post Layout","Category Layout"]}/>
                    <LiMenuHidden title="Bussiness" />
                    <LiMenuHidden title="LifeStyle" />
                    <LiMenuHidden title="Design" />
                    <LiMenuHidden title="About" />
                    <LiMenuHidden title="Contact" />
                </ul>
            </div>
            <div className="header__menu ">
                <ul className="menu flex flex-ai-c flex-jc-c">
                    <li className="menu-item">
                        <a>Home</a>
                        <ul className="sub-menu">
                            <li className="menu-item">Home Two</li>
                            <li className="menu-item">Home One</li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a>Features</a>
                        <ul className="sub-menu">
                            <li className="menu-item">Post Layout</li>
                            <li className="menu-item">Category Layout</li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a>Bussiness</a>
                    </li>
                    <li className="menu-item">
                        <a>LifeStyle</a>
                    </li>
                    <li className="menu-item">
                        <a>Design</a>
                    </li>
                    <li className="menu-item">
                        <a>About</a>
                    </li>
                    <li className="menu-item">
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div className="header__search">
                <Search
                    placeholder="Nhập để tìm kiếm..."
                    allowClear
                    size="large"
                />
            </div>
        </div>
    )
}

export default Header
