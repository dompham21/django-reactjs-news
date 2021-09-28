import React from 'react'
import { Link } from 'react-router-dom'
import { MdModeEdit, MdDelete } from 'react-icons/md'

function ListPostItem() {
    return (
        <div className="list-post-item">
            <div className="list-post-item-top">
                <div className="list-post-item-thumbnail">
                    <img src="https://minimals.cc/static/mock-images/covers/cover_2.jpg"/>
                    <span className="circular"></span>

                </div>
                <img src="https://minimals.cc/static/mock-images/avatars/avatar_4.jpg" className="list-post-item-author"/>
            </div>
            <div className="list-post-item-content">
                <div className="list-post-item-date">19 September 2021</div>
                <div className="list-post-item-title">How 7 Things Will Change The Way You Approach Event</div>
            </div>
            <div className="list-post-item-action flex flex-ai-c flex-jc-c">
                <Link to="/admin/post/edit"><span className="flex flex-ai-c flex-jc-c"><MdModeEdit/></span></Link>
                <span className="flex flex-ai-c flex-jc-c"> <MdDelete/></span>
            </div>
        </div>
    )
}

export default ListPostItem
