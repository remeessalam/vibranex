import React from "react";
import bgImg from "../assets/images/bg-img.webp";
import bannerImg from "../assets/images/banner.webp";
import { Link } from "react-router-dom";

const ConnectWithUs = () => {
  return (
    <div
      className="py-[5rem] relative bg-center bg-cover min-h-[50vh]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 w-full h-full bg-secondary/90"></div>
      <div data-aos="fade-up" className="max-w-7xl mx-auto">
        <div
          className="mx-5 rounded-xl bg-center bg-cover relative"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="absolute top-0 w-full h-full bg-secondary/50"></div>
          <div className="py-[3rem] px-5 bg-primary/70 rounded-xl text-white relative z-10">
            <h1 className="heading-2 max-w-[60rem] mx-auto text-center">
              Let's Build Something Amazing Together! Connect with Us Today!
            </h1>
            <p className="font-light max-w-[50rem] text-center mx-auto mt-3">
              Join us on a journey into the future of business—where innovation
              meets responsibility and success is built on a foundation of
              trust. Together, let’s unlock the potential of AI and transform
              your vision into reality.
            </p>
            <Link to="/contact-us" className="secondary-btn mt-5 w-fit mx-auto">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
