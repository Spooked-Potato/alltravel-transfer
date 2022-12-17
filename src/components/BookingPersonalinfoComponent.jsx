import React from "react";

export default function BookingPersonalinfoComponent() {
  return (
    <>
      <form>
        <h2>Personal Information</h2>
        <div className="form-group">
          <div className="form-grid-item-1">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="form-grid-item-2">
            <label>Telephone</label>
            <input type="tel" name="tel" placeholder="Telephone Number" />
          </div>
          <div className="form-grid-item-3">
            <label>Email</label>
            <input type="email" name="emai0l" placeholder="Email" />
          </div>
        </div>
      </form>
    </>
  );
}
