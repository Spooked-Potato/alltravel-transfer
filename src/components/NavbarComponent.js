import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_sc.png";
import pt from "../assets/pt-pt.png";

export default function NavbarComponent() {
  return (
    <nav>
      <section id="nav_logo">
        <img src={logo} alt="logo_alltravel" />
      </section>
      <ul>
        <li>Holiday Rental</li>
        <li>Aiport Transfer</li>
        <li>Activities</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>
          <select name="Lang" id="lang">
            <option value="PT">
              <div className="flag" id="pt">
                pt
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
  );
}
