import React, { useRef } from 'react'
import SliderItem from './SliderItem';
import { Swiper,SwiperSlide } from 'swiper/react';
import SwiperCore, {
    EffectFade,Navigation,Pagination
  } from 'swiper';
import SubPostSlider from './SubPostSlider';

let arrSlide = [
    {
        key: 1,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/couple.jpg",
        title: "The Game That Finally Lets You Live Your Fantasy of Being a Bickering Married Couple",
        category: "Tips",
        date: "May 14, 2021"
    },
    {
        key: 2,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/friends.jpg",
        title: "6 UX that products will have in future",
        category: "Lifestyle",
        date: "May 19, 2021"
    },
    {
        key: 3,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/laptop.jpg",
        title: "Georgia’s Voting Law Will Make Elections Easier",
        category: "Bussiness",
        date: "May 19, 2021"
    },
    {
        key: 4,
        image: "https://eviorthemes.com/theme/evior/wp-content/uploads/2021/05/baby-girl.jpg",
        title: "The Last Thing Fat Kids Need Today",
        category: "Lifestyle",
        date: "May 19, 2021"
    }
]
function SliderComponent() {
    SwiperCore.use([EffectFade,Navigation,Pagination]);

    const prevRef = useRef(null)
    const nextRef = useRef(null)
    
    return (
        <div className="section-container-slider flex flex-ai-c">
            <div className="slider">
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={30} 
                    effect={'fade'} 
                    
                    pagination={{
                        "clickable": true
                    }} 
                    loop={true}
                    navigation={true}
                    
                    className="mySwiper"
                >
                    {
                        arrSlide && arrSlide.map((slide) => (
                            <SwiperSlide key={slide.key} className="slider-wrapper">
                                <SliderItem image={slide.image} title={slide.title} category={slide.category} date={slide.date}/>
                            </SwiperSlide>
                        ))
                    }
                    

                </Swiper>
                
            </div>
            <SubPostSlider/>
        </div>
       
    )
}

export default SliderComponent
