import React from 'react'
import AvatarUser from '../Components/EditProfileUser/AvatarUser'
import FormEdit from '../Components/EditProfileUser/FormEdit'

function EditProfileUser() {
    return (
        <div className="edit-profile">
            <div className="edit-profile-title">Edit User</div>
            <div className="container flex">
                <div className="profile-left">
                    <AvatarUser/>
                </div>
                <div className="profile-right">
                    <FormEdit/>
                </div>
            </div>
        </div>
    )
}

export default EditProfileUser
