import React from "react";
import { Link } from "react-router-dom";
import { companyDetails, logoImg, routes } from "../constant";
import {
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const ThankYou = () => {
  return (
    <>
      <div className="h-[calc(100vh-18rem)] flex flex-col items-center justify-center">
        <div className="py-4 sticky top-0 w-full bg-secondary/60 backdrop-blur-md z-50 text-white">
          <div className="wrapper flex justify-between items-center gap-10">
            <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
              <Link smooth={true} to="/" className="cursor-pointer">
                <img
                  loading="lazy"
                  src={logoImg}
                  width={150}
                  height={150}
                  className="h-[3rem] md:h-[3.75rem] scale-125"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="wrapper flex flex-col items-center justify-center h-full">
          <h1 className="heading-1">Thank You</h1>
          <p className="text-center text-gray-200 text-sm md:text-base text-balance">
            Thanks for contacting us, one of our associates will get in touch
            with you soon!
          </p>
          <Link
            to={"/"}
            className="mt-7 text-sm cursor-pointer primary-btn w-fit"
          >
            Home
          </Link>
        </div>
      </div>
      <div className="py-[3rem]">
        <div className="wrapper flex lg:flex-row flex-col gap-7 sm:gap-14 justify-between">
          <div className="">
            <img
              width={150}
              height={150}
              loading="lazy"
              src={logoImg}
              className="w-[10rem]"
              alt="logo"
            />
            <p className="desc text-sm max-w-[22rem] mt-3">
              Our innovative solutions are designed not just to meet the demands
              of today but to anticipate the challenges of tomorrow, ensuring
              that your business stays ahead of the curve.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Link
                to={companyDetails.instagram}
                className="w-[2rem] h-[2rem] rounded-full p-2 bg-[#0788AE] hover:bg-tertiary hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
              >
                <Instagram strokeWidth={1.5} size={20} />
              </Link>
              <Link
                to={companyDetails.twitter}
                className="w-[2rem] h-[2rem] rounded-full p-2 bg-[#0788AE] hover:bg-tertiary hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
              >
                <Twitter strokeWidth={1.5} size={20} />
              </Link>
              <Link
                to={companyDetails.linkedin}
                className="w-[2rem] h-[2rem] rounded-full p-2 bg-[#0788AE] hover:bg-tertiary hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
              >
                <Linkedin strokeWidth={1.5} size={20} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-7 sm:gap-14">
            <div className="flex flex-col gap-2 text-white">
              <h6 className="font-semibold">Company</h6>
              <ul className="flex flex-col gap-3 mt-1">
                {routes.map(({ path, name }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="max-w-[22rem] flex gap-2 items-center text-white/70 hover:text-primary transition-colors duration-200"
                    >
                      <ChevronRight size={17} strokeWidth={3} />
                      <span className="text-sm">{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2 text-white">
              <h6 className="font-semibold">Contact Us</h6>
              <ul className="flex flex-col gap-3 mt-1">
                <li className="max-w-[22rem] flex gap-3 text-white/70">
                  <MapPin
                    strokeWidth={1.5}
                    size={20}
                    className="text-primary inline min-w-5"
                  />{" "}
                  <span className="text-sm">{companyDetails.address}</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <Link
                    to={`mailto:${companyDetails.email}`}
                    className="flex gap-3 text-white/70 hover:text-primary transition-colors duration-200"
                  >
                    <Mail
                      strokeWidth={1.5}
                      size={20}
                      className="text-primary inline"
                    />{" "}
                    <span className="text-sm">{companyDetails.email}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`tel:${companyDetails.phone}`}
                    className="flex gap-3 text-white/70 hover:text-primary transition-colors duration-200"
                  >
                    <Phone
                      strokeWidth={1.5}
                      size={20}
                      className="text-primary inline"
                    />{" "}
                    <span className="text-sm">{companyDetails.phone}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`tel:${companyDetails.phone2}`}
                    className="flex gap-3 text-white/70 hover:text-primary transition-colors duration-200"
                  >
                    <Phone
                      strokeWidth={1.5}
                      size={20}
                      className="text-primary inline"
                    />{" "}
                    <span className="text-sm">{companyDetails.phone2}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
