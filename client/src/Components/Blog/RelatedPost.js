import React from 'react'
import PostTextOutside from '../Post/PostTextOutside';

let arrLastestPost = [
    {
        key: 0,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/sun-fire.jpg",
        title: "I Was a Climate Change Denier – This Is Why I Changed My Mind",
        description: "Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and",
        category: "Environment",
        date: "May 21"
    },
    {
        key: 1,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/red-art.jpg",
        title: "The Limits of Peaceful Protest in a World That Is Burning",
        description: "Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and",
        category: "Environment",
        date: "May 21"
    },
    {
        key: 2,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/face-dark.jpg",
        title: "Black People Have Been Saying ‘We Can’t Breathe’ for Decades",
        description: "Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and",
        category: "Environment",
        date: "May 21"
    },
    
]
function RelatedPost() {
    return (
        <div className="related-post">
            <h2 className="title">Lastest Posts</h2>
            <div className="wrapper flex">
                {
                    arrLastestPost && arrLastestPost.map(post=> (
                        <PostTextOutside {...post} key={post.key}/>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedPost
