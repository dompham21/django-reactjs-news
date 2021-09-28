import React,{ useState } from 'react'
import { AiFillCamera } from 'react-icons/ai'

function UploadImageAvatar(props) {
  const { isCreate } = props; 
  const [avatarImg, setAvatarImg] = useState("https://minimals.cc/static/mock-images/avatars/avatar_5.jpg")
  const imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readyState === 2){ //is done
          setAvatarImg(reader.result.toString())
        }
      }
      reader.readAsDataURL(e.target.files[0])
  };
  return (
      <div className="user-avatar-container">
          <img src={avatarImg} style={{display: isCreate ? "none" : "flex"}}/>
          <div className={`user-avatar-overlay flex ${isCreate ? "is-create": '' }`}>
              <input type="file" accept="image/*" className="btn-upload" onChange={imageHandler}/>
              <AiFillCamera/>
              <span>Update photo</span>
          </div>
      </div>
  )
}

export default UploadImageAvatar
