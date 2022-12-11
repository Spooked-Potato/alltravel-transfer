import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_sc.png";

export default function FooterComponent() {
  return (
    <>
      <footer>
        <div className="grid-footer-item-1">
          <div id="footer_logo">
            <img src={logo} alt="logo_alltravel" />
          </div>
        </div>

        <div className="grid-footer-item-2">
          <ul>
            <h2>test</h2>
            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>
          </ul>
        </div>

        <div className="grid-footer-item-3">
          <ul>
            <h2>test</h2>
            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>
          </ul>
        </div>

        <div className="grid-footer-item-4">
          <ul>
            <h2>test</h2>
            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>
          </ul>
        </div>

        <div className="grid-footer-item-5">
          <ul>
            <h2>test</h2>
            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="">
              <Link to="/">Holiday Rental</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
