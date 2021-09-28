import React from 'react'
import ElementorItem from '../ElementorGapHeader/ElementorItem'
let arrElementor = [
    {
        key: 0,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/bulb-1.jpg",
        title: "7 Figma Plugins that Save Your Time",
        description: "",
        category: "Tips",
        date: "May 14, 2021",
     

    },
    {
        key: 1,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/bulb-side.jpg",
        title: "Designing search for your Product Business",
        description: "",
        category: "Tech",
        date: "May 14, 2021",
        

    },
    {
        key: 2,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/man-alone.jpg",
        title: "Five Signs of a Highly Intelligent Person",
        description: "",
        category: "Tips",
        date: "May 14, 2021",
    
    },
    {
        key: 3,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/white-xray.jpg",
        title: "Using UX Law in design are adept Surprisingly",
        description: "",
        category: "Tips",
        date: "May 14, 2021",
    
    }

]
function BlogSidebar() {
    return (
        <div className="blog-sidebar flex">
            <div className="blog-latest-post">
                <div className="container">
                    <h2 className="title">Latest Posts</h2>
                    <div className="wrapper flex">
                        {
                            arrElementor && arrElementor.map(ele => (
                                <ElementorItem key={ele.key} {...ele}/>

                            ))
                        }

                    </div>
                    
                </div>
            </div>
            <div className="blog-advertisement">
                <img src="https://eviorthemes.com/theme/evior/wp-content/uploads/2021/07/blog-ads-two.png"/>
            </div>
            <div className="blog-latest-categories">
                <div className="container">
                    <h2 className="title">Latest Categories</h2>
                    <div className="wrapper flex">
                        {
                            arrElementor && arrElementor.map(ele => (
                                <ElementorItem key={ele.key} {...ele}/>

                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar
