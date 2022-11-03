import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageComponent from "./components/HomepageComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
