import React from "react";
import "./Testimonials.css";
import face from "../../assets/face.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    image: "hi",
    rating: 4.5,
  },
  {
    id: 2,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    image: "hi",
    rating: 4.5,
  },
  {
    id: 3,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    image: "hi",
    rating: 4.5,
  },
  {
    id: 4,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    image: "hi",
    rating: 4.5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__heading">What people say about us</h2>
      <div className="testimonials__container">
        <Swiper
          slidesPerView={1} // Default number of slides per view
          spaceBetween={20} // Space between slides
          pagination={{
            clickable: true, // Enable clickable pagination
          }}
          navigation={true} // Enable navigation arrows
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide on small screens
            },
            768: {
              slidesPerView: 2, // 2 slides on medium screens
            },
            1024: {
              slidesPerView: 3, // 3 slides on large screens
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial">
                <div className="star-div">
                  <div className="testimonial__quote">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <div className="testimonial__rating">★★★★★</div>
                </div>
                <p className="testimonial__content">{testimonial.content}</p>
                <div className="testimonial__profile">
                  <img
                    src={face}
                    alt={testimonial.name}
                    className="testimonial__image"
                  />
                  <div>
                    <h3 className="testimonial__name">{testimonial.name}</h3>
                    <p className="testimonial__title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;