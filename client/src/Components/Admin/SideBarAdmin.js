import React, { useState, useEffect } from 'react'

import { Row , Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as Layers } from '../../Assets/icons/Layers.svg';
import { ReactComponent as AngleDoubleLeft }  from '../../Assets/icons/Angle-double-left.svg'
import { ReactComponent as User }  from '../../Assets/icons/User.svg'
import { ReactComponent as Server }  from '../../Assets/icons/Server.svg'
import { ReactComponent as Box2 }  from '../../Assets/icons/Box2.svg'
import { ReactComponent as Clipboard }  from '../../Assets/icons/Clipboard.svg'
import { ReactComponent as GroupChat }  from '../../Assets/icons/Group-chat.svg'

let siderBarArr = [
    {
        title: "Dashboard",
        key: "dashboard",
        icon: <Layers/>,
        to: "/admin/dashboard"
    },
    {
        title: "Users manager",
        key: "user",
        icon: <User/>,
        to: "/admin/user"

    },
    {
        title: "Post managent",
        key: "post",
        icon: <Server/>,
        to: "/admin/post"
    },
    {
        title: "Traffic analyzer",
        key: "traffic",
        icon: <Box2/>,
        to: "/admin/traffic"

    },
    {
        title: "Calendar",
        key: "calendar",
        icon: <Clipboard/>,
        to: "/admin/calendar"
    },
    {
        title: "Messages",
        key: "messages",
        icon: <GroupChat/>,
        to: "/admin/messages"
    },
]

function SideBarAdmin() {
    const location = useLocation();
    const [showSideBar, setShowSideBar] = useState(false)

  
    return (
        <div className={`sidebar${showSideBar?" is-active" : ""}`}>
            <div className="sidebar__wrapper" >
            
            <Row className="sidebar__header flex-jc-sb flex-ai-c">
                <h3 className="sidebar__header-logo">Evior</h3>
                
                <div className="sidebar__header-icon" onClick={()=>setShowSideBar(!showSideBar)} >
                    <AngleDoubleLeft/>
                </div>
               
            </Row>
            <Row>
                <div className="sidebar__menu">
                    <div className="sidebar__menu-container">
                        <Menu
                            defaultSelectedKeys={[`${location.pathname.split("/")[2] ? location.pathname.split("/")[2] : "dashboard"}`]}
                            mode="inline"
                            className="sidebar__menu-list"
                        >   
                            { siderBarArr.map(menu => {
                                return (
                                    <Menu.Item className="sidebar__menu-item" key={menu.key}>
                                        <Link to={menu.to}>
                                            {menu.icon}<span>{menu.title}</span>
                                        </Link>
                                    </Menu.Item>
                                )
                            })} 
                        </Menu>
                
                    </div>
                </div>
            </Row>
            </div>
        </div>
    )
}

export default SideBarAdmin
