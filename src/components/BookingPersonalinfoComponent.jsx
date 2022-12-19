import React from "react";

export default function BookingPersonalinfoComponent() {
  return (
    <>
      <form>
        <h2>Personal Information</h2>
        <div className="form-group">
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
        </div>
      </form>
    </>
  );
}
