import React from "react";
import NavbarComponent from "./NavbarComponent";
import SubNavCompoent from "./SubNavComponent";
import BookingForm from "./BookingFormComponent";
import loja from "../assets/loja.jpg";

export default function HomePageComponent() {
  return (
    <>
      <NavbarComponent />
      <SubNavCompoent />
      <section className="hero_section">
        <div className="form_hero_section"></div>
      </section>

      <section className="section_shop">
        <h2>
          Faro Airport Transfer service, thinking about you and your family.
        </h2>

        <div className="section_shop_container">
          <div className="box_container_section_shop">
            <p>
              Our Travel Agency has been in the private transportation market
              since 2007, with a multidisciplinary team dedicated to providing
              the best transfer service in the Algarve. Also, you can check our
              rentals for holidays in Portimão and various experiences. Your
              arrival at Faro Airport will be more relaxed, because our driver
              will be waiting for you in the arrivals area, with a name card to
              receive you and help with luggage to the car and take the motorway
              directly to your accommodation. At the time of collection
              scheduled the driver will wait at the main entrance of the
              accommodation, ready to transport you to Faro Airport.
            </p>
          </div>
          <div
            className="box_container_section_shop"
            id="image_box_container_section_shop"
          ></div>
        </div>
      </section>
    </>
  );
}
