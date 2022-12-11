import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageComponent from "./components/HomepageComponent";
import FooterComponent from "./components/FooterComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="Footer" element={<FooterComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
