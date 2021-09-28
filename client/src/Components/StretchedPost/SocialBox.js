import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
function SocialBox() {
    return (
        <div className="social">
            <h2 className="title">Social Networks</h2>
            <div className="social-list">
                <div className="social-item social-fb flex flex-ai-c">
                    <FaFacebookF/>
                    <div className="content">
                        <div className="count">100,688</div>
                        <div className="name">Fans</div>
                    </div>
                </div>
                <div className="social-item social-tw flex flex-ai-c">
                    <FaTwitter/>
                    <div className="content">
                        <div className="count">20,165</div>
                        <div className="name">Followers</div>
                    </div>
                </div>
                <div className="social-item social-ins flex flex-ai-c">
                    <FaInstagram/>
                    <div className="content">
                        <div className="count">50,060</div>
                        <div className="name">Followers</div>
                    </div>
                </div>
                <div className="social-item social-yb flex flex-ai-c">
                    <FaYoutube/>
                    <div className="content">
                        <div className="count">26,820</div>
                        <div className="name">Subscriber</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialBox
