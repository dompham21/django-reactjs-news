import React from 'react'
import { IoIosArrowDown, IoIosNotifications, IoIosSettings, } from 'react-icons/io' 
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'

function NavbarAdmin() {
    return (
        <div className="navbar flex flex-ai-c">
            <ul className="navbar__list flex flex-jc-c flex-ai-c">
                <li className="navbar__list-item">
                    <IoChatbubbleEllipsesOutline/>
                </li>
                <li className="navbar__list-item">
                    <IoIosNotifications/>
                    <div className="pulse-ring"></div>
                </li>
                <li className="navbar__list-item">
                    <IoIosSettings/>
                </li>
                <li className="navbar__list-divine"></li>
            </ul>
            <div className="navbar__info flex flex-ai-c">
                {/* <img className="navbar__info-avatar" src={boy} alt="avatar-boy" /> */}
                <span className="navbar__info-name">Dom Pham</span>
                <IoIosArrowDown/>
            </div>
            
        </div>
    )
}

export default NavbarAdmin
