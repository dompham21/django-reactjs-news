import React from 'react'

function SliderItem(props) {
    const { image, title, category, date } = props;
    return (
        <div className="slider-item">
            <div className="thumbnail">
                <img src={image}/>
            </div>
            <div className="content">
                <h3 className="title">{title}</h3>
                <div className="meta flex flex-ai-c">
                    <div className="category">{category}</div>
                    <div className="date">{date}</div>
                </div>
            </div>
        </div>
    )
}

export default SliderItem
