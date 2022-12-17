import React from "react";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";

export default function ThankYouComponent() {
  return (
    <>
      <NavbarComponent />

      <h1>thank you for booking with us!</h1>
      <div className="thankYouImage">
        <img />
      </div>
      <p>!imporant! - Your booking has been send to your inbox</p>

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
