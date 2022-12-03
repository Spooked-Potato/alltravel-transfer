import React from "react";
import NavbarComponent from "./NavbarComponent";
import SubNavCompoent from "./SubNavComponent";
import CardSwipper from "./CardSwipper";
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
        <h1>
          Faro Airport Transfer service, thinking about you and your family.
        </h1>

        <div className="section_shop_container">
          <div className="box_container_section_shop">
            <p>
              Our Travel Agency has been in the private transportation market
              since 2007, with a multidisciplinary team dedicated to providing
              the best transfer service in the Algarve. Also, you can check our
              rentals for holidays in Portimão and various experiences.
              <br />
              <br />
              Your arrival at Faro Airport will be more relaxed, because our
              driver will be waiting for you in the arrivals area, with a name
              card to receive you and help with luggage to the car and take the
              motorway directly to your accommodation. At the time of collection
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

      <section className="section_card">
        <h2>
          Some destanations <strong>YOU</strong> should vist
        </h2>
        <div className="card_container">
          <CardSwipper></CardSwipper>
        </div>
      </section> 

      <section className="hr_section">
        <hr/>
      </section>
      <section className="grid_homepage">
        <h2>Our services</h2>
        <div className="container_grid">
          <div className="container_grid_img" style={{backgroundImage: `url(./assets/airport-transfer.png)`}}></div>
          <h3>Lorem Ipsum </h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className="container_grid_img" style={{backgroundImage: `url(./assets/taxi.png)`}}></div>
          <h3>Lorem Ipsum </h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className="container_grid_img" style={{backgroundImage: `url(./assets/you.png)`}}></div>
          <h3>Lorem Ipsum </h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>

      </section>
    </>
  );
}
