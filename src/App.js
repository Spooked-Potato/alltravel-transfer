import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ThankYou from "./pages/ThankYou";
import BookingPage from "./pages/BookingPage";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/1" element={<FooterComponent/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
