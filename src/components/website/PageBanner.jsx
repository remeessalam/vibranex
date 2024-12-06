import React from "react";
import bannerImg from "../../assets/images/banner.webp";

const PageBanner = ({ title, desc }) => {
  return (
    <div
      className="w-full min-h-[55vh] h-fit py-[1rem] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute top-0 w-full h-full bg-secondary/90"></div>
      {/* <div className="absolute top-1/2 -translate-y-[20%] left-1/2 -translate-x-1/2 w-full"> */}
      <div className="w-full translate-y-[15%]">
        <div data-aos="fade-up" className="wrapper text-center">
          <h1 className="heading-1">{title}</h1>
          {desc && <p className="desc mt-3 max-w-[55rem] mx-auto">{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
