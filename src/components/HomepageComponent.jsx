import React from "react";

//components
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import CardSwipper from "./CardSwipper";
// import BookingForm from "./BookingFormComponent";

//images
import taxi from "../assets/img-normal/you.png";
import you from "../assets/img-normal/taxi.png";
import transfer from "../assets/img-normal/airport-transfer.png";
import loja from "../assets/img-normal/loja.jpg";
import golf from "../assets/img-normal/private-golf-transfers-algarve.png";
import park from "../assets/img-normal/transport-aquatic-park-algarve.png";

export default function HomePageComponent() {
  return (
    <>
      <NavbarComponent />
   
      <section className="hero_section">
        <div className="form_hero_section"></div>
      </section>

      <section className="section_homepage">
        <h1>
          Faro Airport Transfer service, thinking about you and your family.
        </h1>

        <div className="section_homepage_container">
          <div className="box_container_section_homepage">
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
          <div className="box_container_section_homepage">
            <div className="image_box_container_homepage">
              <img src={loja} alt="whats_app_svg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section_card">
        <h2>
          Some destanations <strong>YOU</strong> should vist
        </h2>
        <div className="card_container">
          <CardSwipper />
        </div>
      </section>

      <section className="hr_section">
        <hr />
      </section>

      <section className="grid_homepage">
        <div className="grid-item-1">
          <h2>test</h2>
        </div>

        <div className="grid-item-2">
          <div className="grid_circle">
            <img src={you} alt="whats_app_svg" />
          </div>
          <div className="grid_title">
            <h2>test</h2>
          </div>
          <div className="grid_text">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              amet dolor, eligendi earum, magnam nostrum architecto corporis
              blanditiis, consequuntur voluptatem ad autem officiis aut. Saepe
              porro deleniti vel sunt repellat.
            </h3>
          </div>
        </div>

        <div className="grid-item-3">
          <div className="grid_circle">
            <img src={taxi} alt="whats_app_svg" />
          </div>
          <div className="grid_title">
            <h2>test</h2>
          </div>
          <div className="grid_text">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              amet dolor, eligendi earum, magnam nostrum architecto corporis
              blanditiis, consequuntur voluptatem ad autem officiis aut. Saepe
              porro deleniti vel sunt repellat.
            </h3>
          </div>
        </div>

        <div className="grid-item-4">
          <div className="grid_circle">
            <img src={transfer} alt="whats_app_svg" />
          </div>
          <div className="grid_title">
            <h2>test</h2>
          </div>
          <div className="grid_text">
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              amet dolor, eligendi earum, magnam nostrum architecto corporis
              blanditiis, consequuntur voluptatem ad autem officiis aut. Saepe
              porro deleniti vel sunt repellat.
            </h3>
          </div>
        </div>
      </section>

      <section className="section_homepage">
        <h2>Test</h2>
        <div className="section_homepage_container">
          <div className="box_container_section_homepage">
            <h3>
              Our Travel Agency has been in the private transportation market
              since 2007, with a multidisciplinary team dedicated to providing
              the best transfer service in the Algarve. Also, you can check our
              rentals for holidays in Portimão and various experiences.
            </h3>
          </div>
          <div className="box_container_section_homepage">
            <div className="double_image_section_homepage">
              <img src={golf} alt="whats_app_svg" /> 
              <img src={park} alt="whats_app_svg" /> 
            </div>
          </div>
        </div>
      </section>
      <FooterComponent/>
      
    </>
  );
}
