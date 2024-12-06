import React from "react";
import bgImg from "../assets/images/bg-img.webp";
import { useKeenSlider } from "keen-slider/react";
import img1 from "../assets/images/client-logos/1.png";
import img2 from "../assets/images/client-logos/2.png";
import img3 from "../assets/images/client-logos/3.png";
import img4 from "../assets/images/client-logos/4.png";
import img5 from "../assets/images/client-logos/5.png";
import img6 from "../assets/images/client-logos/6.png";
import img7 from "../assets/images/client-logos/7.png";

const animation = { duration: 10000, easing: (t) => t };

const JoinHappyCustomers = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 4,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 6,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div
      className="py-[5rem] bg-center bg-cover relative text-white"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 w-full h-full bg-tertiary/95"></div>
      <div className="relative z-10">
        <div data-aos="fade-up" className="wrapper">
          <h2 className="heading-2 max-w-[60rem] mx-auto text-center">
            Join Our <span className="text-primary">100+</span> Happy Clients
          </h2>
        </div>
        <div data-aos="fade-up" ref={sliderRef} className="keen-slider mt-9">
          {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center px-3"
            >
              <img
                width="200"
                height="100"
                loading="lazy"
                src={img}
                alt="featured in"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinHappyCustomers;
