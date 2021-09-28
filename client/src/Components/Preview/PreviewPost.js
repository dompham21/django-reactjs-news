import React, { useEffect } from 'react'
import { Space, Button, Drawer } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { hideDrawerPreview } from '../../Actions/ui_actions';
import Parser from 'html-react-parser';

function PreviewPost() {
    const showDrawer = useSelector(state => state.ui.showDrawerPreview);
    const html = useSelector(state => state.ui.htmlFromEditor)
    const dispatch = useDispatch()
    console.log(html);
    const onClose = () => {
       dispatch(hideDrawerPreview())
    };
    useEffect(() => {
        let videos = document.querySelectorAll('.ql-editor .ql-video')
        if(videos) {
            for (let i = 0; i < videos.length; i++) {
                let embedContainer = document.createElement('div')
                embedContainer.setAttribute('class', 'embed-container')
                let parent = videos[i].parentNode
                parent.insertBefore(embedContainer, videos[i])
                embedContainer.appendChild(videos[i])
            }
        }

    }, [html])
    return (
        <>
            <Drawer
                title="Preview Post"
                closable={true}
                onClose={onClose}
                visible={showDrawer}
                placement="bottom"
                height="100vh"
                extra={
                    <Space>
                      <Button onClick={onClose}>Cancel</Button>
                      <Button type="primary" onClick={onClose}>
                        OK
                      </Button>
                    </Space>
                }
            >
                <div className="preview-post">
                    {Parser(html)}
                </div>
            </Drawer>
        </>
    )
}

export default PreviewPost
