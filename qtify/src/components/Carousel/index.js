import React, { useEffect, useId } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";

import "./Carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Carousel({ data }) {
  const divid = useId();

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        // onSwiper={setSwiperRef}
        slidesPerView={7}
        // centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: "custom",
        // }}
        navigation={{
          nextEl: ".arrow-right",
          prevEl: ".arrow-left",
        }}
        virtual
      >
        {data.map((card) => (
          <SwiperSlide key={card.id}>
            <Card
              imgSrc={card.image}
              label={card.title}
              followersCount={card.follows}
              likes={card.likes}
              songs={card.songs}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="arrow-left arrow">
        <img src="left-arrow.png" alt="" />
      </div>
      <div className="arrow-right arrow">
        <img src="right-arrow.png" alt="" />
      </div>
    </div>
  );
}

export default Carousel;
