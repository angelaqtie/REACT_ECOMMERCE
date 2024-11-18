import React from "react";
import { imgPath } from "../helpers/functions-general";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="md:flex md:justify-between ">
          <div className="footer-box ">
            <img
              src={`${imgPath}/footerlogo.png`}
              alt=""
              className="pl-10 md:pl-0"
            />
            <p className="pl-4 pb-5 text-center md:text-right">
              Get newsletter update for upcoming product and best discount for
              all item
            </p>
            <div className="flex gap-1 justify-center md:justify-start">
              <input
                className="border border-black rounded-full py-3 px-5"
                type="text"
                placeholder="Your Email"
              />
              <Link
                to="/"
                className="bg-black rounded-full text-white py-3 px-8"
              >
                Submit
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-[1fr,_1fr_,1fr] w-[500px] py-4 pl-5">
            <div className="footer-box">
              <h6>Product</h6>
              <ul>
                <li>Tshirt</li>
                <li>Jacket</li>
                <li>Shoes</li>
                <li>Pants</li>
                <li>Sunglasses</li>
                <li>Tuxedo</li>
              </ul>
            </div>
            <div className="footer-box">
              <h6>Categories</h6>
              <ul>
                <li>Man</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Gift</li>
              </ul>
            </div>
            <div className="footer-box">
              <h6>Our Social Media</h6>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom text-white bg-black flex flex-col md:flex-row gap-3 md:justify-between py-2 items-center px-4 ">
        <p>© 2023 Tulos Production</p>
        <ul className="flex gap-5 flex-col md:flex-row text-center">
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
