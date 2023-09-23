import React from 'react';
import TitleSheard from '../../../Component/TitleSheard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <section className='my-24'>
            <TitleSheard 
            subHeading='---From 11:00am to 10:00pm---' 
            heading='ORDER ONLINE'
            />


<Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-4xl uppercase -mt-14 text-white  text-center'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className='text-4xl uppercase -mt-14 text-white  text-center'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className='text-4xl uppercase -mt-14 text-white  text-center'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className='text-4xl uppercase -mt-14 text-white  text-center'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className='text-4xl uppercase -mt-14 text-white  text-center'>salads</h3>
        </SwiperSlide>
      </Swiper>

        </section>
    );
};

export default Category;