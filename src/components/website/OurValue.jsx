import React from "react";
import ourValuesIcon1 from "../../assets/images/icons/innovation&excellence.png";
import ourValuesIcon2 from "../../assets/images/icons/integrity&transparency.png";
import SubHeading from "../SubHeading";

const OurValue = () => {
  return (
    <section className="bg-tertiary/95 py-[5rem]">
      <div className="wrapper grid md:grid-cols-2 items-center gap-7">
        <div className="flex flex-col items-start gap-5">
          <SubHeading heading="Our Values" />
          <h2 data-aos="fade-up" className="heading-2 mx-0">
            Integrity at Our Core,
            <br /> Innovation in Our Spirit
          </h2>
          <p data-aos="fade-up" className="desc">
            Our diverse expertise spans multiple industries, empowering
            businesses of all sizes to harness the transformative power of AI
            and unlock invaluable data-driven insights.
          </p>
          <div data-aos="fade-up" className="flex gap-5 mt-2">
            <div className="min-w-[4rem] h-[4rem] bg-primary rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon1}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">Innovation and Excellence</h6>
              <p className="desc">
                Leading the future with cutting-edge solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex gap-5">
            <div className="min-w-[4rem] h-[4rem] bg-primary rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon2}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">
                Integrity and Transparency
              </h6>
              <p className="desc">
                Building trust, fostering relationships, and ensuring
                accountability.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="bg-secondary flex flex-col gap-6 h-full justify-center rounded-xl p-10"
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">Web Development</p>
              <p className="font-medium">95%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[95%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">App Development</p>
              <p className="font-medium">98%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[98%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">Cloud Migration Services</p>
              <p className="font-medium">92%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[92%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">IT Consulting</p>
              <p className="font-medium">90%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
