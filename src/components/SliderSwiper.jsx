import React from "react";
import { Container } from "react-bootstrap";
import Cloud1 from "../assets/img/png/blast-cloud-2.webp";
import Cloud2 from "../assets/img/png/blast-cloud-1.webp";
import SliderImg1 from "../assets/img/png/slidercar1.webp";
import SliderImg2 from "../assets/img/png/slidercar2.webp";
import SliderImg3 from "../assets/img/png/slidercar3.webp";
import SliderImg4 from "../assets/img/png/slidercar4.webp";
import SliderImg5 from "../assets/img/png/slidercar5.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { NextBtn, Prev } from "../assets/Svgicon";
import { Next } from "react-bootstrap/esm/PageItem";

const SliderSwiper = () => {
  return (
    <div id="Blog" className=" bg-orange">
      <img src={Cloud1} alt="cloud-layer " className=" w-100" />
      <Container className="mb-43 position-relative">
        <h2 className="mb-57 ff-titling fw-bold fs-48 lh-57 text-center clr-white">
          See Our Latest Work
        </h2>
        {/* slider */}
        <Swiper
          slidesPerView={2.5}
          spaceBetween={0}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          effect={"coverflow"}
          navigation={{
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            992: {
              slidesPerView: 2.5,
              spaceBetween: 0,
            },
          }}
        >
          <div className="swiper-wrapper">
            <SwiperSlide className=" gallery-slide">
              <div className="">
                <img src={SliderImg1} alt="slider-image" />
              </div>
            </SwiperSlide>
            {/*  */}
            <SwiperSlide className=" gallery-slide">
              <div className="">
                <img src={SliderImg2} alt="slider-image" />
              </div>
            </SwiperSlide>
            {/*  */}
            <SwiperSlide className=" gallery-slide">
              <div className="">
                <img src={SliderImg3} alt="slider-image" />
              </div>
            </SwiperSlide>
            {/*  */}
            <SwiperSlide className=" gallery-slide">
              <div className="">
                <img src={SliderImg4} alt="slider-image" />
              </div>
            </SwiperSlide>
            {/*  */}
            <SwiperSlide className=" gallery-slide">
              <div className="">
                <img src={SliderImg5} alt="slider-image" />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        {/* button */}
        <div className="swiperbtn d-flex align-items-center justify-content-center swiper-btn-prev">
          <Prev />
        </div>
        <div className="swiperbtn d-flex align-items-center justify-content-center swiper-btn-next">
          <NextBtn />
        </div>
      </Container>
      <img src={Cloud2} className=" w-100" alt="cloud-layer" />
    </div>
  );
};

export default SliderSwiper;
