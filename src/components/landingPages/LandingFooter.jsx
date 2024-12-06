import React from "react";
import { companyDetails, logoImg } from "../../constant";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const LandingFooter = () => {
  return (
    <div className="py-[3rem]">
      <div className="wrapper flex lg:flex-row flex-col gap-7 justify-between">
        <div className="">
          <Helmet>
            {/* Preload the logo image */}
            <link rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
          <img
            width="150"
            height="100"
            src={logoImg}
            className="w-[10rem] object-contain"
            alt="logo"
          />
          <div className="flex items-center gap-3 mt-5">
            <Link
              to={companyDetails.instagram}
              aria-label="Contact us on Instagram"
              className="w-[2rem] h-[2rem] rounded-full p-2 bg-[#0788AE] hover:bg-tertiary hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Instagram strokeWidth={1.5} size={20} />
            </Link>
            <Link
              aria-label="Contact us on Twitter"
              to={companyDetails.twitter}
              className="w-[2rem] h-[2rem] rounded-full p-2 bg-[#0788AE] hover:bg-tertiary hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Twitter strokeWidth={1.5} size={20} />
            </Link>
            <Link
              aria-label="Contact us on LinkedIn"
              to={companyDetails.linkedin}
              className="w-[2rem] h-[2rem] rounded-full p-2 bg-[#0788AE] hover:bg-tertiary hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Linkedin strokeWidth={1.5} size={20} />
            </Link>
          </div>
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
                aria-label="Contact us on email"
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
                aria-label="Contact us on phone"
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
                aria-label="Contact us on phone"
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
  );
};

export default LandingFooter;
