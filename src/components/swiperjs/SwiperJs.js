import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import img1 from './img-1.jpg';
import img2 from './img-2.jpg';
import img3 from './img-3.jpg';
import img4 from './img-4.jpg';
import img5 from './img-5.jpg';
import styles from './SwiperJs.module.css';

const SwiperJs = () => {
  return (
    <>
    <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
      <SwiperSlide>
        <img className={styles.sliderImg} src={img1} alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src={img2} alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src={img3} alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src={img4} alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.sliderImg} src={img5} alt=""/>
      </SwiperSlide>
    </Swiper>
    </>
  )
}

export default SwiperJs;