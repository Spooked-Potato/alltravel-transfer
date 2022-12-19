import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageComponent from "./components/HomepageComponent";
import ThankYouComponent from "./components/ThankYouComponent";
import BookingExtraInfoComponent from "./components/BookingExtraInfoComponent";
import BookingPageComponent from "./components/BookingPageComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/test" element={<BookingExtraInfoComponent />} />
          <Route path="/thankyou" element={<ThankYouComponent />} />
          <Route path="/booking" element={<BookingPageComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
