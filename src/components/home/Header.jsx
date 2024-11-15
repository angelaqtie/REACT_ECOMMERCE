import { Search, ShoppingBag } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { imgPath } from "../helpers/functions-general";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between py-4 items-center text-center">
          <ul className="flex gap-5">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>New & Featured</li>
            <li>Gift</li>
          </ul>

          <Link>
            <img src={`${imgPath}/headerlogo.png`} alt="" />
          </Link>

          <ul className="flex gap-5 font-semibold">
            <li>
              <button>
                <Search strokeWidth={1} />
              </button>
            </li>
            <li>
              <button>
                <ShoppingBag strokeWidth={1} />
              </button>
            </li>
            <li>
              <Link>Log In</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
