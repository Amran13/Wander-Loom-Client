import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../assets/Image/undraw_portfolio_feedback_6r17.png'


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './css/style.css'


import { EffectCoverflow, Pagination } from 'swiper/modules';
import SectionHeading from '../Shared/SectionHeading';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('Reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <div>
            <SectionHeading heading={`Our Clients Review`} text={`lorem ipsum dolot hello world`}></SectionHeading>
            <div className='flex lg:flex-row flex-col w-full'>
                <div className='lg:w-2/5 flex justify-center items-center'>
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className='lg:w-3/5'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 100,
                            depth: 100,
                            modifier: 2,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper h-[550px]"
                    >
                        {
                            reviews.map(review => <SwiperSlide key={review.id}>
                                <div className="card w-72 bg-base-100 shadow-xl">
                                    <figure className='w-32 rounded-full mx-auto mt-4'><img className='w-20' src={review.client_img} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title"> {review.client_name} </h2>
                                        <p> {review.review} </p>

                                    </div>
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Reviews;