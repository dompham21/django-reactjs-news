import React from 'react'
import { Form, Input, Button } from 'antd';

function FormEdit() {
    const [form] = Form.useForm();

    return (
        <div className="edit-form-profile">
            <Form
                form={form}
                layout="vertical"
                autoComplete="off"
            >
                <div className="container flex" >
                    <div className="form-input-group flex">
                        <Form.Item label="Full Name">
                            <Input placeholder="Enter your name..." value="Reece Chung" type="text"/>
                        </Form.Item>
                        <Form.Item label="Email Address">
                            <Input placeholder="Enter your email..." type="email" value="letha_lubowitz24@yahoo.com"/>
                        </Form.Item>
                    </div>
                    <div className="form-input-group flex">
                        <Form.Item label="Phone Number">
                            <Input placeholder="Enter your phone number..." value="990-588-5716" type="text"/>
                        </Form.Item>
                        <Form.Item label="Age">
                            <Input placeholder="Enter your age..." type="text" value="20"/>
                        </Form.Item>
                    </div>
                    <div className="form-input-group flex">
                        <Form.Item label="Address">
                            <Input placeholder="Enter your address..." value="908 Jack Locks" type="text"/>
                        </Form.Item>
                        <Form.Item label="Role">
                            <Input placeholder="Enter your role..." type="text" value="Admin"/>
                        </Form.Item>
                    </div>
                    <div className="form-input-group flex">
                        <Form.Item label="Company">
                            <Input placeholder="Enter your company..." value="Grimes Inc" type="text"/>
                        </Form.Item>
                        <Form.Item label="Country">
                            <Input placeholder="Enter your country..." type="text" value="VietNam"/>
                        </Form.Item>
                    </div>
                </div>
                <div className="btn-wrapper flex flex-ai-c">
                    <Button className="btn-submit">Save Changes</Button>
                </div>
            </Form>
        </div>
    )
}

export default FormEdit
