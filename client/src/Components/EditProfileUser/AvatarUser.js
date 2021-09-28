import { Switch, Tag } from 'antd'
import React, { useState } from 'react'
import { AiFillCamera } from 'react-icons/ai'
import UploadImageAvatar from '../Upload/UploadImageAvatar'
function AvatarUser(props) {
    const { isCreate } = props
    const [banned, setBanned] = useState('Active')
    const handleSwitchBanned = (checked) => {
        if(checked) {
            setBanned("Banned")
        }
        else {
            setBanned("Active")
        }
    }

    return (
        <div className="user-wrapper">
            <div className="user-current-status flex" style={{display: isCreate ? "none" : "flex"}}>
                {
                    banned === 'Active' ? 
                        <Tag color="green" >
                            Active
                        </Tag>
                    :
                        <Tag color="red" >
                            Banned
                        </Tag>

                }
            </div>
            <div className="user-avatar">
                {/* <div className="user-avatar-container">
                    <img src="https://minimals.cc/static/mock-images/avatars/avatar_5.jpg" style={{display: isCreate ? "none" : "flex"}}/>
                    <div className={`user-avatar-overlay flex ${isCreate ? "is-create": '' }`}>
                        <input type="file" accept="image/*" className="btn-upload" />
                        <AiFillCamera/>
                        <span>Update photo</span>
                    </div>
                </div> */}
                <UploadImageAvatar isCreate={isCreate}/>
            </div>
            <div className="user-config-upload">Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB</div>
            <div className="user-switch-banned flex" style={{display: isCreate ? "none" : "flex"}}>
                <div className="user-switch-content flex">
                    <div className="title">Banned</div>
                    <div className="description">Apply disable account</div>
                </div>
                <Switch onChange={handleSwitchBanned}/>
            </div>
        </div>
    )
}

export default AvatarUser
