import React,{ useState, useCallback } from 'react'
import Dropzone from 'react-dropzone'

function UploadDropImage() {
    const [avatarImg, setAvatarImg] = useState("")

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
            if(reader.readyState === 2){ //is done
                setAvatarImg(reader.result.toString())
            }
          }
          reader.readAsDataURL(file)
        })
        
      }, [])


    return (
        <div className="upload">
            <Dropzone onDrop={onDrop}   multiple={false}>
                {({getRootProps, getInputProps}) => (
                    <div className="upload-container" {...getRootProps()} >
                        <input type="file" accept="image/*" className="upload-btn" {...getInputProps()}/>
                        <div className="upload-papper flex flex-ai-c flex-jc-c" style={{display: avatarImg.length > 0 ? "none" : "flex"}}>
                            <div className="upload-description">
                                <h3>Drop or Select file</h3>
                                <p>Drop file here or click browse thorough your machine</p>
                            </div>
                        </div>
                        <img src={avatarImg} className="upload-preview-image" style={{display: avatarImg.length === 0 ? "none" : "unset"}}/>
                    </div>
                )}
            </Dropzone>

        </div>
    )
}

export default UploadDropImage
