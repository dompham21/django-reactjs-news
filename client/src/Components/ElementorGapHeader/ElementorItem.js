import React from 'react'

function ElementorItem(props) {
    const { image, title, description, category, date } = props;
    return (
        <div className="elementor-container">
            <div className="thumbnail">
                <img src={image}/>
            </div>
            <div className="content">
                <h3 className="title">{title}</h3>
                <p className="description">
                    {description}
                </p>
                <div className="meta flex flex-ai-c">
                    <div className="category">{category}</div>
                    <div className="date">{date}</div>
                </div>
            </div>
        </div>
    )
}

export default ElementorItem
