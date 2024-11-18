import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const HomeBanner = ({ img, header, subheader, smallheader }) => {
  return (
    <section className="homeBanner">
      <div className="container py-[6rem]">
        <img
          src={`${imgPath}/${img}`}
          alt=""
          className="md:w-full h-screen md:object-cover rounded-lg"
        />

        <div className="absolute -bottom-1 left-8 text-white">
          <h1 className="pb-5 md:tracking-widest ">{header}</h1>
          <div className="flex flex-col md:flex-row md:gap-[1150px] item-center">
            <div
              className="max-w-[23rem] md:max-w-[35rem]
            "
            >
              <p>{subheader}</p>
              <p>{smallheader}</p>
            </div>
            <div className="mt-5">
              <Link
                to="/"
                className="bg-white rounded-full py-2 px-8 text-black font-bold"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
