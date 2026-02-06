import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import JpgToPdf from "./pages/JpgToPdf";
import MergePdf from "./pages/MergePdf";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jpg-to-pdf" element={<JpgToPdf />} />
        <Route path="/merge-pdf" element={<MergePdf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;