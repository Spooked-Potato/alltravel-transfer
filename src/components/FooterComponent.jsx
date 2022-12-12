import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_sc.png";
import reclamacoes from "../assets/reclamacoes.png";

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
      <div className="sub_footer">
        <p>© 2022 AllTravel, Lda. All rights reserved.</p>
        <img src={reclamacoes} alt="Livro de reclamções | Complain book" />
      </div>
    </>
  );
}
