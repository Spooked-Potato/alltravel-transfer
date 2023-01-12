import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

export default function ThankYou() {
  return (
    <>
      <NavbarComponent />

      <div className="thankYouImage">
      <h1>thank you for booking with us!</h1>
        <img />
      <p>!imporant! - Your booking has been send to your inbox</p>
      </div>

      <div className="socialThankYoubox">
        <h2>Follow us</h2>
        <div className="gridThankYou">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
