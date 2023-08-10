import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Error from "./Pages/Error";
import Login from "./Pages/Login";
import BlankPage from "./Components/BlankPage";
import MensClothing from "./Components/MensClothing";
import Jewelery from "./Components/Jewelery";
import Electronics from "./Components/Electronics";
import WomensClothings from "./Components/WomensClothings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlankPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Error />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/home/product/:id" element={<Cart />} />
          <Route path="/home/mensClothing" element={<MensClothing />} />
          <Route path="/home/jewelery" element={<Jewelery />} />
          <Route path="/home/electronics" element={<Electronics />} />
          <Route path="/home/womensClothing" element={<WomensClothings />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
