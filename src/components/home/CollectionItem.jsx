import React from "react";
import { imgPath } from "../helpers/functions-general";

const CollectionItem = ({ item }) => {
  return (
    <div className="new-arrival-card px-4 py-10">
      <div className="mb-4 relative group">
        <img
          src={`${imgPath}/${item.img}`}
          alt=""
          className="rounded-3xl h-[30rem] w-full"
        />
        <div className="text text-center md:text-left">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <h5>${item.price}</h5>{" "}
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
