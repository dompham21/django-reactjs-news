import React from 'react'

function PostTextOutside(props) {
    const { image, title, category, description, date } = props;
    return (
        <div className="post below">
            <div className="thumbnail">
                <img src={image}/>
            </div>
            <div className="content">
                <h3 className="title">{title}</h3>
                {
                    description ? <div className="description">{description}</div> : null
                }
                <div className="meta flex flex-ai-c">
                    <div className="category">{category}</div>
                    <div className="date">{date}</div>
                </div>
            </div>
        </div>
    )
}

export default PostTextOutside