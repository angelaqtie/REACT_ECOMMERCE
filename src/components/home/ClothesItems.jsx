import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const ClothesItems = ({ item }) => {
  return (
    <div className="px-4 py-10">
      <div className="mb-4 relative group">
        <img
          src={`${imgPath}/${item.img}`}
          alt=""
          className="rounded-3xl h-[40rem]  object-cover"
        />
        <div className="text absolute bottom-5 left-5">
          <h3 className="pb-3 text-white">{item.title}</h3>
          <Link
            to="/"
            className="bg-white rounded-full py-2 px-8 text-black font-bold"
          >
            {item.btn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClothesItems;
