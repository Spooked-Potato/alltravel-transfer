import React from "react";

export default function BookingTransferInfoComponent({ heading }) {
  return (
    <>
      <form className="form_wrapper">
        <h2>{heading}</h2>
        
          <div className="form-grid-item">
            <label>Date</label>
            <input type="date" name="date" placeholder="Date" />
          </div>

          <div className="form-grid-item">
            <label>Number of People</label>
            <input
              type="number"
              name="numberpeople"
              placeholder="Number of People"
            />
          </div>

          <div className="form-grid-item">
            <label>From</label>
            <input type="text" name="from" placeholder="from" />
          </div>

          <div className="form-grid-item">
            <label>To</label>
            <input type="text" name="To" placeholder="to" />
          </div>

          <div className="form-grid-item">
            <label>Flight Number</label>
            <input
              type="text"
              name="flightnumber"
              placeholder="Flight Number"
            />
          </div>

          <div className="form-grid-item">
            <label>Arrival Time</label>
            <input type="time" name="time" placeholder="Arrival Time" />
          </div>

          <div className="form-grid-item">
            <label>Apartment or Hotel</label>
            <input
              type="text"
              name="Apartment or Hotel"
              placeholder="Apartment or Hotel"
            />
          </div>
          
          <div className="form-grid-item">
            <div className="form-flex">
              <div className="form-flex-container">
                <label>Baby Seat</label>
                <input type="number" name="babyseat" placeholder="0" max={10} />
              </div>
              <div className="form-flex-container">
                <label>Booster Seat</label>
                <input
                  type="number"
                  name="boosterseat"
                  placeholder="0"
                  max={10}
                />
              </div>
              <div className="form-flex-container">
                <label>Golf Bags</label>
                <input type="number" name="golfbags" placeholder="0" max={30} />
              </div>
            </div>
          </div>
      </form>
    </>
  );
}
