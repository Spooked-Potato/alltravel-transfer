import React from "react";


// import NavbarComponent from "../components/NavbarComponent";
// import FooterComponent from "../components/FooterComponent";
import BookingTransferInfoComponent from "../components/Booking/BookingTransferInfoComponent";

export default function BookingPage() {
  return (
    <>
      {/* <NavbarComponent /> */}
        <h1>Booking Form</h1>
     <section className="form_grid">
        <form className="form_wrapper">
          <h2>Personal Information</h2>

      
            <div className="form-grid-item">
              <label>Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>

            <div className="form-grid-item">
              <label>Telephone</label>
              <input type="tel" name="tel" placeholder="Telephone Number" />
            </div>

            <div className="form-grid-item">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
     
        </form>



        <BookingTransferInfoComponent heading={"Transfer Information"} />
        <BookingTransferInfoComponent heading={"Transfer Information"} />
  

        <form className="form_wrapper">
          <h2>Extra Information</h2>
         
            <div className="form-grid-item">
              <label>Price</label>
              <input type="text" name="price" placeholder="Price" />
            </div>

            <div className="form-grid-item">
              <label>Payment Method</label>
              <input
                type="tel"
                name="Payment Method"
                placeholder="Payment Method"
              />
            </div>

            <div className="form-grid-item">
              <label>Where did you find us?</label>
              <select name="Where did you find us?" id="lang" required>
                <option value="Select an option">Select an option...</option>
                <option value="Frequent Client">Frequent Client</option>
                <option value="Recomended by a friend">
                  Recomended by a friend
                </option>
                <option value="Google">Google Search</option>
                <option value="Yahoo">Bing, Yahoo or other Search</option>
                <option value="Facebook">Facebook</option>
                <option value="TripAdvisor">TripAdvisor</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-grid-item">
              <label>Extra Comments</label>
              <input
                type="text"
                name="comments"
                placeholder="Leave a extra information"
              />
            </div>
            <div className="form-grid-item">
              <button type="submit">Submit</button>
            </div>
        </form>
        </section>
      {/* <FooterComponent /> */}
    </>
  );
}
