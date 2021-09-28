import { Input, Button, Select } from 'antd'
import React from 'react'
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ListPost from '../Components/ManagerPost/ListPost'
function AdminManagerPost() {
    const { Option } = Select;

    return (
        <div className="manager-post">
            <div className="manager-post-header flex">
                <div className="manager-post-title">Post List</div>
                <Link to="/admin/post/create"><Button className="manager-post-btn-add flex flex-ai-c"><AiOutlinePlus/> New Post</Button></Link>
            </div>
            <div className="container">
                <div className="manager-post-helper flex flex-ai-c">
                    <Input placeholder="Search post..." prefix={<AiOutlineSearch/>} className="manager-post-search"/>
                    <Select defaultValue="latest">
                        <Option value="latest">Latest</Option>
                        <Option value="popular">Popuplar</Option>
                        <Option value="oldest">Oldest</Option>
                    </Select>
                </div>
                <div className="manager-post-list">
                    <ListPost/>
                </div>
            </div>
        
        </div>
    )
}

export default AdminManagerPost
