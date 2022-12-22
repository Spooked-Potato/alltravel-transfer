import React from "react";

export default function BookingExtraInfoComponent() {
  return (
    <>
      <form>
        <h2>Extra Information</h2>
        <div className="form-group">
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
              <option value="Select an option">
                Select an option...
              </option>
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
        </div>
      </form>
    </>
  );
}
