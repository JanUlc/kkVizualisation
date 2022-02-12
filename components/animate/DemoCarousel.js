import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = ({children}) =>  {

        return (
            <Carousel showArrows={false} autoPlay infiniteLoop>
               {children}
            </Carousel>
        );
    }

export default DemoCarousel;