import React from "react";
import ClothesItems from "./ClothesItems";

const ClothesSection = () => {
  const clothesSectionArray = [
    {
      img: "card-7.png",
      title: "MAN",
      btn: "See Details",
    },
    {
      img: "card-8.png",
      title: "WOMEN",
      btn: "See Details",
    },
    {
      img: "card-9.png",
      title: "KIDS",
      btn: "See Details",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className=" grid md:grid-cols-3 ">
          {clothesSectionArray.map((item, key) => (
            <ClothesItems item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothesSection;
