import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logoalltravel.svg";
import reclamacoes from "../assets/img-normal/reclamacoes.png";

export default function FooterComponent() {
  return (
    <>
      <footer>
        <div className="grid-footer-item-1">
            <img src={logo} alt="logo_alltravel" />
        </div>

        <div className="grid-footer-item-2">
          <ul>
            <h2>test</h2>
            <li className="underline_effect">
              <Link to="/footer">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>
          </ul>
        </div>

        <div className="grid-footer-item-3">
          <ul>
            <h2>test</h2>
            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>
          </ul>
        </div>

        <div className="grid-footer-item-4">
          <ul>
            <h2>test</h2>
            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>
          </ul>
        </div>

        <div className="grid-footer-item-5">
          <ul>
            <h2>test</h2>
            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>

            <li className="underline_effect">
              <Link to="/">Holiday Rental</Link>
            </li>
          </ul>
        </div>
      </footer>
      {/* <div className="hr_footer">
        <hr/>
      </div> */}
      <div className="sub_footer">
        <p>?? 2022 AllTravel, Lda. All rights reserved.</p>
        <img src={reclamacoes} alt="Livro de reclam????es | Complain book" />
      </div>
    </>
  );
}
