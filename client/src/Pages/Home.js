import React from 'react'
import ButtonScrollOnTop from '../Components/ButtonScrollOnTop/ButtonScrollOnTop'
import Categories from '../Components/Categories/Categories'
import DontMiss from '../Components/DontMiss/DontMiss'
import ElementorGapHeader from '../Components/ElementorGapHeader/ElementorGapHeader'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import RecentPost from '../Components/RecentPost/RecentPost'
import SliderComponent from '../Components/Slider/SliderComponent'
import Stretched from '../Components/StretchedPost/Stretched'

function Home() {
    return (
        <div>
            <Header/>
            <ElementorGapHeader/>
            <SliderComponent/>
            <RecentPost/>
            <DontMiss/>
            <Categories/>
            <Stretched/>
            <Footer/>
            <ButtonScrollOnTop/>
        </div>
    )
}

export default Home
