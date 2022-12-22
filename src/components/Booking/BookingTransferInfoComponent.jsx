import React from "react";

export default function BookingTransferInfoComponent() {
  return (
    <>
      <form>
        <h2>Transfer Information</h2>
        <div className="form-group">
          <div className="form-grid-item">
            <label>Date</label>
            <input type="date" name="date" placeholder="Date" />
          </div>
          <div className="form-grid-item">
            <label>Telephone</label>
            <input type="tel" name="tel" placeholder="Telephone Number" />
          </div>
          <div className="form-grid-item">
            <label>Number of People</label>
            <input type="email" name="emai0l" placeholder="Email" />
          </div>
          <div className="form-grid-item">
            <label>From</label>
            <input type="email" name="emai0l" placeholder="Email" />
          </div>
          <div className="form-grid-item">
            <label>To</label>
            <input type="email" name="emai0l" placeholder="Email" />
          </div>
          <div className="form-grid-item">
            <label>Flight Number</label>
            <input type="email" name="emai0l" placeholder="Email" />
          </div>
          <div className="form-grid-item">
            <label>Arrival Time</label>
            <input type="email" name="emai0l" placeholder="Email" />
          </div>
          <div className="form-grid-item">
            <label>Apartment or Hotel</label>
            <input type="email" name="emai0l" placeholder="Email" />
          </div>
        </div>
      </form>
    </>
  );
}
