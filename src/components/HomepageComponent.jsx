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
      {/* <NavbarComponent /> */}

      <section className="hero_section">
        <div className="form_hero_container">
          <form>
            <label>Where you coming from?</label>
            <input />
            <label>Where are you going to?</label>
            <input />
            <label>Number of People</label>
            <input />
            <label>Date</label>
            <input />
            <label>Add Return</label>
            <input type="checkbox" />
            <button>Book Now</button>
            <button>What's App</button>
          </form>
        </div>
      </section>

      <section className="main_section">
        <h1>
          Faro Airport Transfer service, thinking about you and your family.
        </h1>

        <div className="main_wrapper">
          <div className="main_box">
            <p>
              Our Travel Agency has been in the private transportation market
              since 2007, with a multidisciplinary team dedicated to providing
              the best transfer service in the Algarve. Also, you can check our
              rentals for holidays in Portimão and various experiences.
              <br />
              Your arrival at Faro Airport will be more relaxed, because our
              driver will be waiting for you in the arrivals area, with a name
              card to receive you and help with luggage to the car and take the
              motorway directly to your accommodation. At the time of collection
              scheduled the driver will wait at the main entrance of the
              accommodation, ready to transport you to Faro Airport.
            </p>
          </div>
          <div className="main_box">
            <img src={loja} alt="whats_app_svg" />
          </div>
        </div>
      </section>

      <section className="section_card">
        <h2>Some destanations YOU should vist</h2>
        <div className="card_container">
          <CardSwipper />
        </div>
      </section>

      <section className="hr_section">
        <hr />
      </section>

      <section className="section_info">
        <h2>test</h2>

        <div className="info_wrapper">
          <div className="info_circle">
            <img src={you} alt="whats_app_svg" />
          </div>
          <h3>test</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim amet
            dolor, eligendi earum, magnam nostrum architecto corporis
            blanditiis, consequuntur voluptatem ad autem officiis aut. Saepe
            porro deleniti vel sunt repellat.
          </p>

          <div className="info_circle">
            <img src={taxi} alt="whats_app_svg" />
          </div>
          <h3>test</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim amet
            dolor, eligendi earum, magnam nostrum architecto corporis
            blanditiis, consequuntur voluptatem ad autem officiis aut. Saepe
            porro deleniti vel sunt repellat.
          </p>

          <div className="info_circle">
            <img src={transfer} alt="whats_app_svg" />
          </div>
          <h3>test</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim amet
            dolor, eligendi earum, magnam nostrum architecto corporis
            blanditiis, consequuntur voluptatem ad autem officiis aut. Saepe
            porro deleniti vel sunt repellat.
          </p>
        </div>
      </section>

      <section className="grid_sub_info">
        <div className="grid_sub_info_item">
          <div className="grid_sub_info_img_container">
            <img src={golf} alt="whats_app_svg" />
          </div>
        </div>

        <div className="grid_sub_info_item">
          <div className="grid_sub_info_img_container">
            <img src={park} alt="whats_app_svg" />
          </div>
        </div>

        <div className="grid_sub_info_item">
          <h2>Test</h2>
        </div>
        <div className="grid_sub_info_item">
          <p>
            Our Travel Agency has been in the private transportation market
            since 2007, with a multidisciplinary team dedicated to providing the
            best transfer service in the Algarve. Also, you can check our
            rentals for holidays in Portimão and various experiences.
          </p>
        </div>
      </section>

      {/* <section  className="google-comments-container">
        
      </section> */}

      {/* <FooterComponent /> */}
    </>
  );
}
