import SectionTitle from "./SectionnTitle";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination  } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../util/testimonial";

const Testimonial = () => {
  return (
    <section className="bg-gray-50 w-full pt-10 pb-10 lg:pb-20 lg:pt-20" id="testimonials">
      <SectionTitle
        title="Testimonials"
        subtitle="See what our PTE students have to say about their study experience"
      />

      <div className="mt-12 mx-4 lg:px-48 flex  lg:w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          
          {testimonials.map((testimony, i) => {
            return (
                <SwiperSlide key={i}>
                    <TestimonialCard
                    userImg={testimony.userImg}
                    name={testimony.name}
                    occupation={testimony.occupation}
                    testimony={testimony.testimony}
                    />
                </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

