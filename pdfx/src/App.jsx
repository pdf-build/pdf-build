import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import JpgToPdf from "./pages/JpgToPdf";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jpg-to-pdf" element={<JpgToPdf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;