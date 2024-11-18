import React from "react";
import CollectionItem from "./CollectionItem";

const NewCollection = () => {
  const newCollectionArray = [
    {
      img: "card-1.png",
      title: "Loro Piana",
      description: "Slim-Fit Striped Silk and Linen-Blend Polo Shirt",
      price: "45",
    },
    {
      img: "card-2.png",
      title: "White Pants",
      description: "Slim Fit Man Pants",
      price: "90",
    },
    {
      img: "card-3.png",
      title: "Bidha Glasses",
      description: "Black Glasses with luxury finishing",
      price: "5",
    },
    {
      img: "card-4.png",
      title: "Brown Bomber",
      description: "luxury unisex bomber jackert",
      price: "89",
    },
    {
      img: "card-5.png",
      title: "Loro Piana",
      description: "Slim-Fit Striped Silk and ",
      price: "21",
    },
    {
      img: "card-6.png",
      title: "Loro Piana",
      description: " Striped Silk and Linen-Blend",
      price: "52",
    },
  ];
  return (
    <section>
      <div className="container py-10">
        <div className="title text-center">
          <h2>NEW COLLECTION</h2>
          <p>
            Our latest collection, where classic and the contemporary style
            converge in perfect harmony
          </p>
        </div>
        <div className="wrapper grid md:grid-cols-3 ">
          {newCollectionArray.map((item, key) => (
            <CollectionItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
