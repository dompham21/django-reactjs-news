import React from 'react'
import AvatarUser from '../Components/EditProfileUser/AvatarUser'
import FormEdit from '../Components/EditProfileUser/FormEdit'

function CreateUser() {
    return (
        <div className="edit-profile">
            <div className="edit-profile-title">Create a new user</div>
            <div className="container flex">
                <div className="profile-left">
                    <AvatarUser isCreate={true}/>
                </div>
                <div className="profile-right">
                    <FormEdit/>
                </div>
            </div>
        </div>
    )
}

export default CreateUser
