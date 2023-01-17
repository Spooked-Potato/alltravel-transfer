import React, { useState } from "react";

// components
// import FooterComponent from "../components/FooterComponent";
// import NavbarComponent from "../components/NavbarComponent";
import BookingForm from "../components/Booking/BookingFormComponent";
import DatePicker from "react-datepicker";
import CardSwipper from "../components/CardSwipper";


// imports
import "react-datepicker/dist/react-datepicker.css";

// images
import taxi from "../assets/img-normal/you.png";
import you from "../assets/img-normal/taxi.png";
import transfer from "../assets/img-normal/airport-transfer.png";
import loja from "../assets/img-normal/loja.jpg";
import golf from "../assets/img-normal/private-golf-transfers-algarve.png";
import park from "../assets/img-normal/transport-aquatic-park-algarve.png";

export function HomePage() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      {/* <NavbarComponent /> */}

      <header>
        <form>
          <div className="header_form_item">
            <label>From</label>
              <BookingForm/>
          </div>
          <div className="header_form_item">
            <label>To</label>
              <BookingForm/>
          </div>
          <div className="header_form_item">
            <label>Number of People</label>
            <select name="Where did you find us?" id="number">
              <option value="numer-of-people-1">1</option>
              <option value="numer-of-people-2">2</option>
              <option value="numer-of-people-3">3</option>
              <option value="numer-of-people-4">4</option>
              <option value="numer-of-people-5">5</option>
              <option value="numer-of-people-6">6</option>
              <option value="numer-of-people-7">7</option>
              <option value="numer-of-people-8">8</option>
              <option value="numer-of-people-9">9+</option>
            </select>
          </div>

          <div className="header_form_item">
            <label>Date</label>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              minDate={new Date()}
              onChange={(date) => setStartDate(date)}
            />


          </div>
          <div className="header_form_item">
            <input type="checkbox" />
            <label>Add Return</label>
          </div>
          <button type="submit" className="button">Book Now</button>
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
