import { Minus } from "lucide-react";
import React from "react";

const SubHeading = ({ heading }) => {
  return (
    <div data-aos="fade-up" className="section-heading flex items-center gap-1">
      <Minus size={30} /> {heading}
    </div>
  );
};

export default SubHeading;
