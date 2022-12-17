import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img-normal/logo_sc.png";
import SubNavCompoent from "./SubNavComponent";

export default function NavbarComponent() {
  return (
    <>
      <nav>
        <div className="grid-nav-item-1">
          <img src={logo} alt="logo_alltravel" />
        </div>

        <div className="grid-nav-item-2">
          <Link to="/" className="underline_effect">
            Holiday Rental
          </Link>
        </div>

        <div className="grid-nav-item-3">
          <Link to="/" className="underline_effect">
            Airport Transfer
          </Link>
        </div>

        <div className="grid-nav-item-4">
          <Link to="/" className="underline_effect">
            Activities
          </Link>
        </div>

        <div className="grid-nav-item-5">
          <Link to="/" className="underline_effect">
            About us
          </Link>
        </div>

        <div className="grid-nav-item-6">
          <Link to="/" className="underline_effect">
            Contact us
          </Link>
        </div>

        <div className="grid-nav-item-7">
          <select name="Lang" id="lang">
            <option value="PT">
              <div className="flag" id="pt">
                PT
              </div>
            </option>
            <option value="EN">EN</option>
            <option value="NL">NL</option>
            <option value="RUS">RUS</option>
            <option value="GER">GER</option>
            <option value="FR">FR</option>
            <option value="ES">ES</option>
          </select>
        </div>
      </nav>
      <SubNavCompoent />
    </>
  );
}
