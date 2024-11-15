import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const HomeBanner = ({ img, header, subheader, smallheader }) => {
  return (
    <section className="homeBanner">
      <div className="container">
        <img
          src={`${imgPath}/${img}`}
          alt=""
          className="w-full h-screen object-cover rounded-lg"
        />

        <div className="absolute -bottom-1 left-8 text-white">
          <h1 className="pb-5 tracking-widest ">{header}</h1>
          <div className="flex gap-[1150px] item-center">
            <div>
              <p>{subheader}</p>
              <p>{smallheader}</p>
            </div>
            <div className="">
              <Link className="bg-white rounded-full py-2 px-8 text-black font-bold">
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
