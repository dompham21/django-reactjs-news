import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ButtonScrollOnTop from '../Components/ButtonScrollOnTop/ButtonScrollOnTop'
import BlogContent from '../Components/Blog/BlogContent'
import BlogSidebar from '../Components/Blog/BlogSidebar'
import RelatedPost from '../Components/Blog/RelatedPost'

function DetailPost(props) {
    return (
        <div>
            <Header/>
            <div className="blog flex">
                <BlogContent/>
                <BlogSidebar/>
            </div>
            <RelatedPost/>
            <Footer/>
            <ButtonScrollOnTop/>
        </div>
    )
}

export default DetailPost
