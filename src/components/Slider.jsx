import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter, useTypewriter } from 'react-simple-typewriter'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import 'animate.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {

    const [text] = useTypewriter({
        words: [`Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, Cambodia!`],
        loop: 0
      })

    return (
        <div className='my-5 relative'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay= {
                    {delay: 3000}
                }
                className="mySwiper "

            >
                <SwiperSlide className='relative'>
                    <img className='object-cover max-h-[420px] w-full' src="https://i.ibb.co/vXWdNx2/masudur-rahman-3-VIASEA4x-Z0-unsplash.jpg" alt="" />
                    {/* <div className='absolute bottom-6 md:bottom-10 md:right-10 w-1/2 bg-gray-500 ml-20 p-3 bg-opacity-70 rounded-md animate__animated animate__fadeInLeft'>
                        <div className="subtitle" data-swiper-parallax="-200">
                            <h3 className='text-white font-bold text-2xl'>St. Martin's Island</h3>
                        </div>
                        <div className="text text-white" data-swiper-parallax="-100">
                            <p>
                                Saint Martin's Island is a picturesque gem nestled in the Bay of Bengal, off the southernmost tip of Bangladesh. Renowned for its pristine sandy beaches, azure waters, and vibrant marine life, it offers a serene escape for nature lovers and adventurers alike.
                            </p>
                        </div>
                    </div> */}
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover bg-bottom max-h-[420px] w-full' src="https://i.ibb.co/tMNFfqt/sumit-chinchane-j-WKk-0-ZBUyg-unsplash.jpg" alt="" />
                    {/* <div className='absolute bottom-6 md:bottom-10 md:right-10 w-1/2 bg-gray-500 ml-20 p-3 bg-opacity-70 rounded-md animate__animated animate__fadeInLeft'>
                        <div className="subtitle" data-swiper-parallax="-200">
                            <h3 className='text-white font-bold text-2xl'>Phuket</h3>
                        </div>
                        <div className="text text-white" data-swiper-parallax="-100">
                            <p>
                                Phuket, Thailand's largest island, is a dazzling blend of natural beauty, rich culture, and vibrant nightlife. With its palm-fringed beaches, turquoise waters, and lush greenery, Phuket captivates visitors from around the globe.
                            </p>
                        </div>
                    </div> */}
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover max-h-[420px] w-full' src="https://i.ibb.co/k6QN4RS/geio-tischler-7hww7t6-NLcg-unsplash.jpg" alt="" />
                    {/* <div className='absolute bottom-6 md:bottom-10 md:right-10 w-1/2 bg-gray-500 ml-20 p-3 bg-opacity-70 rounded-md animate__animated animate__fadeInLeft'>
                        <div className="subtitle" data-swiper-parallax="-200">
                            <h3 className='text-white font-bold text-2xl'>Bali</h3>
                        </div>
                        <div className="text text-white" data-swiper-parallax="-100">
                            <p>
                                Bali, often referred to as the "Island of the Gods," is a tropical paradise renowned for its breathtaking landscapes, rich culture, and warm hospitality. From lush rice terraces to volcanic mountains and pristine beaches, Bali offers a diverse range of experiences for travelers.
                            </p>
                        </div>
                    </div> */}
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img className='object-cover max-h-[420px] w-full' src="https://i.ibb.co/nf3V537/setu-chhaya-30i-CQ5mw2-A8-unsplash.jpg" alt="" />
                    {/* <div className='absolute bottom-6 md:bottom-10 md:right-10 w-1/2 bg-gray-500 ml-20 p-3 bg-opacity-70 rounded-md animate__animated animate__fadeInLeft'>
                        <div className="subtitle" data-swiper-parallax="-200">
                            <h3 className='text-white font-bold text-2xl'>Phong Nha Caves</h3>
                        </div>
                        <div className="text text-white" data-swiper-parallax="-100">
                            <p>
                            Phong Nha Cave, located in the Quang Binh Province of central Vietnam, is a mesmerizing natural wonder renowned for its stunning limestone formations and underground river system. Part of the Phong Nha-Ke Bang National Park.
                            </p>
                        </div>
                    </div> */}
                </SwiperSlide>
                
            </Swiper>
            <div className='absolute left-20 bottom-28 rounded-lg z-10 bg-gray-500 bg-opacity-70 p-5 md:w-[450px] md:h-56'>
            <h3 className='text-white  text-3xl font-bold '>Travel with Adventure-Aegis <br /> and Visit... <span className='text-yellow-300 text-opacity-80'>{text}</span></h3>
            </div>
        </div>
    );
};

export default Slider;