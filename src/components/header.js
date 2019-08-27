import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import fbIcon from "../images/facebook-logo.svg";
import twitterIcon from "../images/twitter-logo.svg";
import instaIcon from "../images/instagram-logo.svg";
import linkwebLogo from "../images/logo-linkweb.png";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="">
      <div className="topbar max-w-xl bg-bleu flex justify-around p-2 rounded-br-large">
        <Link to="#" className="flex items-center no-underline text-white">
          <span className="text-white century">Agence Web</span>
        </Link>
        <Link to="#" className="flex items-center no-underline text-white">
          <span className="text-white century">Le Blog</span>
        </Link>
        <Link to="#" className="flex items-center no-underline text-white">
          <img 
            src={ fbIcon }
            className="w-6 fill-current"
          />
        </Link>
        <Link to="#" className="flex items-center no-underline text-white">
          <img 
            src={ twitterIcon }
            className="w-6 fill-current"
          />
        </Link>
        <Link to="#" className="flex items-center no-underline text-white">
          <img 
            src={ instaIcon }
            className="w-6 fill-current"
          />
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline w-56">
          <img 
            src={linkwebLogo} 
            className=""
          />
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-sm">
            <Link
              to="/"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
