import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageComponent from "./components/HomepageComponent";
import ThankYouComponent from "./components/ThankYouComponent";
import BookingPageComponent from "./components/Booking/BookingPageComponent";
import BookingTransferInfoComponent from "./components/Booking/BookingTransferInfoComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/thankyou" element={<ThankYouComponent />} />
          <Route path="/booking" element={<BookingPageComponent />} />
          <Route path="/1" element={<BookingTransferInfoComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
