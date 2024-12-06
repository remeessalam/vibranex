import React from "react";
import bgImg from "../assets/images/bg-img.webp";
import bannerImg from "../assets/images/banner.webp";
import { ReactComponent as icon1 } from "../assets/svgs/Proven Expertise.svg";
import { ReactComponent as icon2 } from "../assets/svgs/Affordable & Time Efficient.svg";
import { ReactComponent as icon3 } from "../assets/svgs/Client-Centric Approach.svg";
import { ReactComponent as icon4 } from "../assets/svgs/Commitment to Quality.svg";
import { ReactComponent as icon5 } from "../assets/svgs/End-to-End Solutions.svg";
import { ReactComponent as icon6 } from "../assets/svgs/Dedicated Support.svg";
import { ReactComponent as icon7 } from "../assets/svgs/Transparent and Reliable.svg";
import { ReactComponent as icon8 } from "../assets/svgs/Innovative Problem Solvers.svg";

const content = [
  {
    icon: icon1,
    title: "Proven Expertise",
  },
  {
    icon: icon2,
    title: "Affordable & Time Efficient",
  },
  {
    icon: icon3,
    title: "Client-Centric Approach",
  },
  {
    icon: icon4,
    title: "Commitment to Quality",
  },
  {
    icon: icon5,
    title: "End-to-End Solutions",
  },
  {
    icon: icon6,
    title: "Dedicated Support",
  },
  {
    icon: icon7,
    title: "Transparent and Reliable",
  },
  {
    icon: icon8,
    title: "Innovative Problem Solvers",
  },
];

const WhyChooseUs = () => {
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
            <h1
              data-aos="fade-up"
              className="heading-2 max-w-[60rem] mx-auto text-center"
            >
              Why Choose Us?
            </h1>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10"
            >
              {content.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col group items-center gap-3 bg-gradient-to-b from-[#179CC4] to-[#0f4a5d] rounded-xl p-5 transition-all duration-200"
                >
                  <item.icon className="w-[3.5rem] fill-white h-[3.5rem] transition-all duration-200" />
                  <p className="text-center">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
