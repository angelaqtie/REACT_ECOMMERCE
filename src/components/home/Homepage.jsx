import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomeBanner from "./HomeBanner";
import NewCollection from "./NewCollection";
import CollectionItem from "./CollectionItem";

const Homepage = () => {
  return (
    <>
      <Header />
      <HomeBanner
        img="banner.jpg"
        header="TOLUS SPRING COLLECTION"
        subheader="Fint out best spring collection. Offering our best quality product in a Tolus "
        smallheader="Spring Collection"/>
      <CollectionItem />
      <NewCollection />

      <Footer />
    </>
  );
};

export default Homepage;
