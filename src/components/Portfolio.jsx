import React from "react";
import SubHeading from "./SubHeading";
import { appPortfolio, webPortfolio } from "../constant";

const Portfolio = ({ page }) => {
  let portfolioList;

  if (page === "web-development") {
    portfolioList = webPortfolio;
  } else if (page === "app-development") {
    portfolioList = appPortfolio;
  } else {
    portfolioList = webPortfolio.slice(0, 3).concat(appPortfolio.slice(0, 3));
  }
  return (
    <div className="py-[5rem] wrapper flex flex-col items-center gap-5">
      <SubHeading heading="Our Portfolio" />
      <h2
        data-aos="fade-up"
        className="heading-2 max-w-[60rem] mx-auto text-center"
      >
        Work Speaks Volumes: Discover Our Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto mt-5">
        {portfolioList.map(({ img, id, title }) => (
          <div
            className="relative aspect-square sm:aspect-square rounded-xl overflow-hidden"
            key={id}
            data-aos="fade-up"
          >
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-[#0a1828db] z-0"></div>
            <img
              loading="lazy"
              src={img}
              width="200"
              height="200"
              className={`-z-10 h-full w-full object-cover`}
              alt={title}
            />
            <h3 className="text-xl absolute p-3 bottom-0 left-0 w-full bg-[#0f2136] text-center text-white">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
