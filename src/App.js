import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
