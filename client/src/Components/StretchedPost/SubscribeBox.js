import { Button, Form, Input } from 'antd'
import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai'

function SubscribeBox() {
    return (
        <Form className="subscribe-box">
            <div className="container">
                <div className="icon"/>
                <div className="text">
                    <h3>Subscribe to our mailing list to get the new updates!</h3>   
                    <p>To be more efficient and happy, cut the waste and damaging activities from your life.</p> 
                </div>

                <Form.Item
                    className="input-email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your mail!' }]}
                >
                    <Input type="email" placeholder="Enter your mal here..."/>
                </Form.Item>

                <Form.Item className="btn-submit">
                    <Button htmlType="submit">Subscribe</Button>
                </Form.Item>
            </div>
        </Form>
    )
}

export default SubscribeBox
