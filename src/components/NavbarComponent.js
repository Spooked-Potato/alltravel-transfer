import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_sc.png";

export default function NavbarComponent() {
  return (
    <>
      <nav>
        <section id="nav_logo">
          <img src={logo} alt="logo_alltravel" />
        </section>
        <ul>
          <li className="underline_effect">
            <Link to="/">Holiday Rental</Link>
          </li>

          <li className="underline_effect">
            <Link to="/">Airport Transfer</Link>
          </li>

          <li className="underline_effect">
            <Link to="/">Activities</Link>
          </li>

          <li className="underline_effect">
            <Link to="/">About us</Link>
          </li>

          <li className="underline_effect">
            <Link to="/">Contact us</Link>
          </li>

          <li>
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
          </li>
        </ul>
      </nav>
    </>
  );
}
