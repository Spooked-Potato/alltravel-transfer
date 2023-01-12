import React from "react";

//components
// import FooterComponent from "../components/FooterComponent";
// import NavbarComponent from "../components/NavbarComponent";
import CardSwipper from "../components/CardSwipper";
// import BookingForm from "./BookingFormComponent";

//images
import taxi from "../assets/img-normal/you.png";
import you from "../assets/img-normal/taxi.png";
import transfer from "../assets/img-normal/airport-transfer.png";
import loja from "../assets/img-normal/loja.jpg";
import golf from "../assets/img-normal/private-golf-transfers-algarve.png";
import park from "../assets/img-normal/transport-aquatic-park-algarve.png";

export default function HomePage() {
  return (
    <>
      {/* <NavbarComponent /> */}

      <header>
        <form>
          <div className="header_form_item">
            <label>Where you coming from?</label>
            <input />
          </div>
          <div className="header_form_item">
            <label>Where are you going to?</label>
            <input />
          </div>
          <div className="header_form_item">
            <label>Number of People</label>
            <input />
          </div>
          <div className="header_form_item">
            <label>Date</label>
            <input />
          </div>
          <div className="header_form_item">
            <input type="checkbox" />
            <label>Add Return</label>
          </div>
          <button type="submit" id="submit_home">
            Book Now
          </button>
          <a
            target="_blank"
            rel="noreferrer"
            id="whatsapp_button"
            href="https://api.whatsapp.com/send/?phone=351968317170&text&type=phone_number&app_absent=0"
          >
            WhatsApp
          </a>
        </form>
      </header>

      <section className="main_section">
        <h1>
          Faro Airport Transfer service, thinking about you and your family.
        </h1>

        <div className="main_wrapper">
          <div className="main_container">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              amet dolor, eligendi earum, magnam nostrum architecto corporis
              blanditiis, consequuntur voluptatem ad autem officiis aut. Saepe
              porro deleniti vel sunt repellat. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Enim amet dolor, eligendi earum,
              magnam nostrum architecto corporis blanditiis, consequuntur
              voluptatem ad autem officiis aut. Saepe porro deleniti vel sunt
              repellat.
            </p>
          </div>
          <div className="main_container">
            <img loading="lazy " src={loja} alt="whats_app_svg" />
          </div>
        </div>
      </section>

      <section className="section_card">
        <h2>Some destanations YOU should vist</h2>
        <div className="card_container">
          <CardSwipper />
        </div>
      </section>

      <section className="hr_wrapper">
        <hr />
      </section>

      <section className="section_info">
        <h2>test</h2>

        <div className="info_wrapper">
          <div className="info_container">
            <img src={you} alt="whats_app_svg" />

            <h3>test</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              amet dolor, eligendi earum, magnam nostrum architecto corporis
              blanditiis, consequuntur voluptatem ad autem officiis aut. Saepe
              porro deleniti vel sunt repellat.
            </p>
          </div>

          <div className="info_container">
            <img loading="lazy" src={taxi} alt="whats_app_svg" />
            <h3>test</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              amet dolor, eligendi earum, magnam nostrum architecto corporis
              blanditiis, consequuntur voluptatem ad autem officiis aut. Saepe
              porro deleniti vel sunt repellat.
            </p>
          </div>

          <div className="info_container">
            <img loading="lazy" src={transfer} alt="whats_app_svg" />
            <h3>test</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              amet dolor, eligendi earum, magnam nostrum architecto corporis
              blanditiis, consequuntur voluptatem ad autem officiis aut. Saepe
              porro deleniti vel sunt repellat.
            </p>
          </div>
        </div>
      </section>

      <section className="sub_info_wrapper">
        <div className="sub_info_container">
          <img loading="lazy" src={golf} alt="whats_app_svg" />
          <img loading="lazy" src={park} alt="whats_app_svg" />
        </div>
        <div className="sub_info_container">
          <h2>Test</h2>
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
