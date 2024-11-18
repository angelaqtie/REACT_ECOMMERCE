import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomeBanner from "./HomeBanner";
import NewCollection from "./NewCollection";
import CtaBanner from "./CtaBanner";
import ClothesSection from "./ClothesSection";
import Announment from "./Announment";

const Homepage = () => {
  return (
    <>
      <Announment/>
      <Header />
      <HomeBanner
        img="banner.jpg"
        header="TOLUS SPRING COLLECTION"
        subheader="Fint out best spring collection. Offering our best quality product in a Tolus "
        smallheader="Spring Collection"
      />
      <NewCollection />
      <CtaBanner
        img="secondbanner.png"
        header="WEAR TO WEADING"
        subheader="A symphony of exquisite designs tailored for your unforgettable moments"
      />
      <ClothesSection />
    

      <Footer />
    </>
  );
};

export default Homepage;
