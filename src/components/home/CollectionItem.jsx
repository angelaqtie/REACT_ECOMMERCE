import React from "react";
import { imgPath } from "../helpers/functions-general";

const CollectionItem = ({ item, key }) => {
  return (
    <div className="">
      <h2>NEW COLLECTION</h2>
      <p>
        Our latest collection, where classic and the contemporary style converge
        in perfect harmony
      </p>
      <div className="">
        <img src={`${imgPath}/card-1.png`} alt="" className="rounded-lg" />
        <div className="">
          <h6>Loro Piana</h6>
          <p>Slim-Fit Striped and Linen-Blend Polo Shirt</p>
          <h5>$45</h5>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
