import { Button, Input } from 'antd'
import React from 'react'
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ListUser from '../Components/ManagerUser/ListUser'

function AdminManagerUser() {
    return (
        <div className="manager-user">
            <div className="manager-user-header flex">
                <div className="manager-user-title">User List</div>
                <Link to="/admin/user/create"><Button className="manager-user-btn-add flex flex-ai-c"><AiOutlinePlus/> New User</Button></Link>
            </div>
            <div className="container">
                <div className="manager-user-helper flex flex-ai-c">
                    <Input placeholder="Search user..." prefix={<AiOutlineSearch/>} className="manager-user-search"/>
                    <BsFilter/>
                </div>
                <div className="manager-user-list">
                    <ListUser/>
                </div>
            </div>
           
        </div>
    )
}

export default AdminManagerUser
