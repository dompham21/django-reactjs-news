import React from 'react'
import PostTextInner from '../Post/PostTextInner';
import PostTextOutside from '../Post/PostTextOutside';
import SocialBox from './SocialBox';
import SubscribeBox from './SubscribeBox';

let arrPost = [
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
    {
        key: 3,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/whale-pic.jpg",
        title: "Why This Whale ‘Poop’ Is Called ‘Floating Gold’",
        description: "Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and",
        category: "Environment",
        date: "May 21"
    },
    {
        key: 4,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/shopping-woman.jpg",
        title: "Buy Merch for a Good Cause With These VICE Collabs",
        description: "Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and",
        category: "Environment",
        date: "May 21"
    },
    {
        key: 5,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/path-long.jpg",
        title: "2020’s Equator Prize Winners Offer a Roadmap for Solving the Climate Crisis",
        description: "Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and",
        category: "Environment",
        date: "May 21"
    },
    {
        key: 6,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/forest-picture.jpg",
        title: "I Was a Climate Change Denier – This Is Why I Changed My Mind",
        description: "Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and",
        category: "Environment",
        date: "May 21"
    },
    {
        key: 7,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/riding-boy.jpg",
        title: "I Was a Climate Change Denier – This Is Why I Changed My Mind",
        description: "Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and",
        category: "Environment",
        date: "May 21"
    },
    {
        key: 8,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/man-alone.jpg",
        title: "I Was a Climate Change Denier – This Is Why I Changed My Mind",
        description: "Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and",
        category: "Environment",
        date: "May 21"
    },
    {
        key: 9,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/city.jpg",
        title: "I Was a Climate Change Denier – This Is Why I Changed My Mind",
        description: "Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and",
        category: "Environment",
        date: "May 21"
    },

]

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
    {
        key: 3,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/face-dark.jpg",
        title: "Black People Have Been Saying ‘We Can’t Breathe’ for Decades",
        description: "Apple today named eight app and game developers receiving an Apple Design Award, each one selected for being thoughtful and",
        category: "Environment",
        date: "May 21"
    },
]
function Stretched() {
    return (
        <div className="stretched flex">
            <div className="stretched-left flex">
                {
                    arrPost && arrPost.map(post=> (
                        <PostTextInner {...post} key={post.key}/>
                    ))
                }
            </div>
            <div className="stretched-right">
                <h2 className="title">Lastest Posts</h2>
                <div className="stretched-right-list flex">
                    {
                        arrLastestPost && arrLastestPost.map(post=> (
                            <PostTextOutside {...post} key={post.key}/>
                        ))
                    }
                </div>
                <SubscribeBox/>
                <SocialBox/>
            </div>
        </div>
    )
}

export default Stretched
