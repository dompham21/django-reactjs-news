import React from 'react'
import { Link } from 'react-router-dom'
import ElementorItem from './ElementorItem'


let arrElementor = [
    {
        key: 0,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/artworks-1.jpg",
        title: "Accessible Fluid Typo",
        description: "Struggling to sell one multi-million dollar home quite on currently the market easily",
        category: "Tips",
        date: "May 14, 2021",
            

    },
    {
        key: 1,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/green-pattern.jpg",
        title: "The Sans Description",
        description: "Struggling to sell one multi-million dollar home quite on currently the market easily",
        category: "Tech",
        date: "May 14, 2021",
         
    },
    {
        key: 2,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/cloud.jpg",
        title: "The Red Room",
        description: "Struggling to sell one multi-million dollar home quite on currently the market easily",
        category: "Tips",
        date: "May 14, 2021",
 
    }

]
function ElementorGapHeader() {
    return (
        <div className="elementor">
            {
                arrElementor && arrElementor.map(ele => (
                    <Link to={`/post/${ele.key}`} key={ele.key} >
                        <ElementorItem {...ele}/>
                    </Link>
                ))
            }
        </div>
    )
}

export default ElementorGapHeader
