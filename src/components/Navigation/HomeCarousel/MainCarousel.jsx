import React from 'react';
import { MainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };


   

const MainCarousel = () => {

    const items = MainCarouselData.map((item)=>( <img className='cursor-pointer'
role='presentation' src={item.image} alt="" width="100%" />)
    )
    
    return (
    <AliceCarousel
        // mouseTracking
        items={items}
        // responsive={responsive}
        controlsStrategy="alternate"

         autoPlay
         autoPlayInterval={1000}
         infinite
    />
)};

export default MainCarousel;