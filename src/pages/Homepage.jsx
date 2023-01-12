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
        <div className="form_header_container">
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
            <img src={taxi} alt="whats_app_svg" />
            <h3>test</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              amet dolor, eligendi earum, magnam nostrum architecto corporis
              blanditiis, consequuntur voluptatem ad autem officiis aut. Saepe
              porro deleniti vel sunt repellat.
            </p>
          </div>

          <div className="info_container">
            <img src={transfer} alt="whats_app_svg" />
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
          <img src={golf} alt="whats_app_svg" />
          <img src={park} alt="whats_app_svg" />
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
