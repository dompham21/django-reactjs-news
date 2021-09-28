import React from 'react'
import PostTextInside from '../Post/PostTextInside'
import PostTextOutside from '../Post/PostTextOutside'

function DontMiss() {
    return (
        <div className="dont-miss">
            <div className="dont-miss-heading">
                <div className="title">Don’t Miss</div>
                <div className="sub-title">Top pic for you</div>
            </div>
            <div className="dont-miss-container flex">
                <div className="container-left flex">
                    <PostTextInside 
                        image="https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/play-btn.jpg"
                        title="The Game That Finally Lets You Live Your Fantasy of Being a Bickering Married Couple"
                        category="Business"
                        date="May 14, 2021"
                    />
                    <PostTextInside 
                        image="https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/coins-collection.jpg"
                        title="The Game That Finally Lets You Live Your Fantasy of Being a Bickering Married Couple"
                        category="Business"
                        date="May 14, 2021"
                    />
                </div>
                <div className="container-right">
                    <PostTextOutside
                        image="https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/paper.jpg"
                        title="The Nicest Thing I Can Say About Greg Gutfeld’s Late-Night Show on Fox News"
                        category="Business"
                        date="May 14, 2021"
                    />
                </div>
            </div>
        </div>
    )
}

export default DontMiss
