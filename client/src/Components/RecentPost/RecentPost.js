import React from 'react'
import PostTextInside from '../Post/PostTextInside'
import RecentPostItem from './RecentPostItem'

let arrListRecentPost = [
    {
        key: 0,
        number: "01",
        title: "Are you still creating a product from the noughties?",
        category: "Design",
        date: "May 14"
    },
    {
        key: 1,
        number: "02",
        title: "The designer’s dilemma rely on Adaptive vs. responsive design",
        category: "Design",
        date: "May 14"
    },
    {
        key: 2,
        number: "03",
        title: "50 CSS Best Practices to Write Better CSS",
        category: "Design",
        date: "May 14"
    },
    {
        key: 3,
        number: "04",
        title: "Facebook Group Dedicated To Oddly Specific Playlists",
        category: "Design",
        date: "May 14"
    },

]
function RecentPost() {
    return (
        <div className="recent-post">
            <div className="container flex">
                <div className="recent-list">
                    <h2 className="recent-list-title">Most Recent</h2>
                    {
                        arrListRecentPost && arrListRecentPost.map(post => (
                            <RecentPostItem key={post.key} {...post}/>
                        ))
                    }
                </div>
                <div className="recent-elementor flex">
                    <div className="recent-elementor-top flex">
                        <PostTextInside 
                            image="https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/long-tower.jpg"
                            title="5 Ways Animals Will Help You Get More Business"
                            category="Business"
                            date="May 14, 2021"
                        />
                        <PostTextInside 
                            image="https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/gambler-girl.jpg"
                            title="5 Ways Animals Will Help You Get More Business"
                            category="Business"
                            date="May 14, 2021"
                        />
                    </div>
                   
                    <div className="recent-elementor-bottom">
                        <PostTextInside 
                            image="https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/couple.jpg"
                            title="The Game That Finally Lets You Live Your Fantasy of Being a Bickering Married Couple"
                            description="Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has"
                            category="Business"
                            date="May 14, 2021"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentPost
