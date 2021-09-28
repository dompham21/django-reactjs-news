import { Button } from 'antd'
import React from 'react'
let arrCategoriesList = [
    {
        key: 0,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/07/tower.jpg",
        name: "Business",
        number: "13 Posts"
    }, 
    {
        key: 1,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/06/gaming.jpg",
        name: "Gaming",
        number: "1 Posts"
    },
    {
        key: 2,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/08/pattern-color.jpg",
        name: "Lifestyle",
        number: "12 Posts"
    },
    {
        key: 3,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/tennis.jpg",
        name: "Sports",
        number: "6 Posts"
    },
    {
        key: 4,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/tech-glass.jpg",
        name: "Tech",
        number: "7 Posts"
    },

]
function Categories() {
    return (
        <div className="categories">
            <div className="categories-heading">
                <div className="title">Categories</div>
                <div className="sub-title">Featured Posts</div>
            </div>
            <ul className="categories-list">
                {
                    arrCategoriesList && arrCategoriesList.map(item => (
                        <li className="categories-item" style={{backgroundImage: `url(${item.image})`}} key={item.key}>
                            <div className="categories-content">
                                <div className="name">{item.name}</div>
                                <div className="number">{item.number}</div>
                            </div>
                            <div className="categories-btn-wrapper">
                                <Button className="categories-btn">View All</Button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories
