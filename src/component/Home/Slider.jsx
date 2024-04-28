import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../assets/Image/photo-1589193302643-3ee67ac58fc7.avif'
import slide2 from '../../assets/Image/photo-1634985492349-8589a9255cbe.avif'
import slide3 from '../../assets/Image/photo-1634985492480-c9a3c229e048.avif'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide> <img className='fixed-slider' src={slide1} alt="" /> </SwiperSlide>
            <SwiperSlide> <img className='fixed-slider' src={slide2} alt="" /> </SwiperSlide>
            <SwiperSlide> <img className='fixed-slider' src={slide3} alt="" /> </SwiperSlide>
            
        </Swiper>
    );
};

export default Slider;