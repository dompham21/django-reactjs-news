import React, { useState } from 'react'
import EditorPost from '../Components/CreatePost/EditorPost'
import { Input, Form, Switch, Select, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { showDrawerPreview } from '../Actions/ui_actions';
import PreviewPost from '../Components/Preview/PreviewPost';
import UploadDropImage from '../Components/Upload/UploadDropImage';

const { TextArea } = Input;
const { Option } = Select;

function CreatePost() {
    const [form] = Form.useForm();
    const children = ["Sport", "Media", "Policy"];

    const dispatch = useDispatch();
    
    const handleOpenDrawer = () => {
        dispatch(showDrawerPreview());
    }

    return (
        <div className="create-post">
            <div className="create-post-title">Create a new post</div>
            <Form
                form={form}
                autoComplete="off"
            >
                <div className="container flex">
                    
                    <div className="create-post-left">
                        <Form.Item label="Title">
                            <Input placeholder="Enter your title ..." type="text" className="input-post-title"/>
                        </Form.Item>
                        <Form.Item label="Description">
                            <TextArea
                                placeholder="Enter your description ..."
                                autoSize={{ minRows: 3, maxRows: 6 }}
                                className="input-post-description"
                            /> 
                        </Form.Item>
                        <EditorPost/>
                        <div style={{marginTop: "24px"}}>
                            <div style={{marginBottom: "8px"}}>Cover</div>
                            <UploadDropImage/>
                        </div>
                    </div>
                    <div className="create-post-right">
                        <div className="create-post-right-wrapper">
                            <Form.Item>
                                <div className="flex flex-ai-c flex-jc-sb">
                                    <span className="switch-title">Publish</span>    
                                    <Switch defaultChecked/>
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <div className="flex flex-ai-c flex-jc-sb">
                                    <span className="switch-title">Enable comments</span>    
                                    <Switch defaultChecked/>
                                </div>
                            </Form.Item>
                            <Form.Item >
                                <Select 
                                    placeholder="Select Categories" 
                                    mode="multiple"
                                    allowClear
                                >
                                    {children?.map(child => (
                                        <Option key={child} value={child}>{child}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item label="Meta title">
                                <Input placeholder="Enter meta title ..." type="text" className="input-post-title"/>
                            </Form.Item>
                            <Form.Item label="Meta description">
                                <TextArea
                                    placeholder="Enter meta description ..."
                                    autoSize={{ minRows: 3, maxRows: 6 }}
                                    className="input-post-description"
                                /> 
                            </Form.Item>
                        </div>
                        <div className="create-post-wrapper-btn flex flex-ai-c">
                            <Button className="btn-post preview" onClick={handleOpenDrawer}>Preview</Button>
                            <Button className="btn-post submit-post">Post</Button>
                        </div>
                    </div>
                       
                </div>
                
            </Form>
            <PreviewPost/>
        </div>
    )
}

export default CreatePost
