import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/image/logo1.png";
import {
  AiOutlineTwitter,
  AiOutlineBehance,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Header = () => {
  const [offset, setOffset] = useState(window.scrollY);

  window.addEventListener("scroll", () => {
    setOffset(window.scrollY);
    console.log(offset);
  });

  return (
    <div
      className={
        offset >= 10
          ? "bg-red-500  flex items-center h-28 fixed top-0 w-full z-50"
          : "bg-red-500  flex items-center fixed w-full h-28 z-50"
      }
    >
      <div className="container mx-auto xl:mx-64">
        <div>
          <a className="mb-10">
            <img src={Logo} />
          </a>
        </div>
        <div className="navbar flex">
          <div className="flex-1">
            <nav className="flex gap-7">
              <Link
                to="#home"
                smooth
                activeClassName="selected"
                activeStyle={{ color: "blue" }}
                className="font-semibold text-white"
              >
                Home
              </Link>
              <Link to="#fourbox" smooth className="font-semibold text-white">
                Features
              </Link>
              <Link to="#mobileApp" smooth className="font-semibold text-white">
                Showcase
              </Link>
              <Link to="" className="font-semibold text-white">
                Team
              </Link>{" "}
              <Link to="" className="font-semibold text-white">
                FAQ
              </Link>
              <Link to="" className="font-semibold text-white">
                Screenshot
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <FaFacebookF fontSize={20} color={"white"} />
            <AiOutlineBehance fontSize={20} color={"white"} />
            <AiFillLinkedin fontSize={20} color={"white"} />
            <AiOutlineTwitter fontSize={20} color={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
