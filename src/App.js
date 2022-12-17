import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageComponent from "./components/HomepageComponent";
import ThankYouComponent from "./components/ThankYouComponent";
import BookingPersonalinfoComponent from "./components/BookingPersonalinfoComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/test" element={<BookingPersonalinfoComponent />} />
          <Route path="/thankyou" element={<ThankYouComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
