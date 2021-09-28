import React from 'react'
import { Outlet } from 'react-router-dom';
import NavbarAdmin from '../Components/Admin/NavbarAdmin';
import SideBarAdmin from '../Components/Admin/SideBarAdmin';


function Admin() {
    return (
        <div className="admin">
            <SideBarAdmin/>
            <div className="admin__wrapper">
                <NavbarAdmin/> 
                <Outlet/>
            </div>
        </div>
    )
}

export default Admin
