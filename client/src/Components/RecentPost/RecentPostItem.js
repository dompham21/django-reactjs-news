import React from 'react'

function RecentPostItem(props) {
    const { number, title, category, date } = props;
    return (
        <div className="recent-list-item flex">
            <div className="number">{number}</div>
            <div className="content">
                <div className="title">{title}</div>
                <div className="meta flex flex-ai-c">
                    <div className="category">{category}</div>
                    <div className="date">{date}</div>
                </div>
            </div>
        </div>
    )
}

export default RecentPostItem
