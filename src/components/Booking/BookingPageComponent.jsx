import React from "react";

import NavbarComponent from "../NavbarComponent";
import FooterComponent from "../FooterComponent";
import BookingExtraInfoComponent from "./BookingExtraInfoComponent";
import BookingPersonalinfoComponent from "./BookingPersonalinfoComponent";
import BookingTransferInfoComponent from "./BookingTransferInfoComponent";

export default function BookingPageComponent() {
  return (
    <>
      <NavbarComponent />
      <div className="space_form">
        <h1>Booking Form</h1>
      </div>
      <div className="space_form">
        <BookingPersonalinfoComponent />
      </div>

      <div className="space_form">
        <BookingTransferInfoComponent heading={"Transfer Information"} />
      </div>

      <div className="space_form">
        <BookingExtraInfoComponent />
      </div>
      <FooterComponent />
    </>
  );
}