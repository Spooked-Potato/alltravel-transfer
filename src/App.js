import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ThankYou from "./pages/ThankYou";
import BookingPage from "./pages/BookingPage";
import BookingTransferInfoComponent from "./components/Booking/BookingTransferInfoComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/1" element={<BookingTransferInfoComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
