import React from "react";
import { Link } from "react-router-dom";
import { imgPath } from "../helpers/functions-general";

const CtaBanner = ({ img, header, subheader }) => {
  return (
    <div className="container py-32">
      <img
        src={`${imgPath}/${img}`}
        alt=""
        className="w-full pb-5 md:object-cover h-[20rem] md:rounded-[4rem] md:h-[40rem] "
      />
      <div className=" text-center">
        <h2>{header}</h2>
        <p className="opacity-70 pb-5">{subheader}</p>
        <Link
          to="/"
          className="bg-black rounded-full py-2 px-8 text-white font-bold"
        >
          SEE DETAILS
        </Link>
      </div>
    </div>
  );
};

export default CtaBanner;
