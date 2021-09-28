import React from 'react'

function PostTextInner(props) {
    const { image, title, category, description, date } = props;

    return (
        <div className="post inner flex">
            <div className="content">
                <h3 className="title">{title}</h3>
                <div className="description">{description}</div>
                <div className="meta flex flex-ai-c">
                    <div className="category">{category}</div>
                    <div className="date">{date}</div>
                </div>
            </div>
            <div className="thumbnail">
                <img src={image}/>
            </div>
        </div>
    )
}

export default PostTextInner
