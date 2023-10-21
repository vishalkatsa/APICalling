import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MCard from "./components/MCard";
import {MyContextProvider} from './components/context/Context'
function App() {
  return (
    <>
    <MyContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Card categorie={''} />} />
          <Route exact path="/Mcard" element={<MCard/>} />
          <Route exact path="home" element={<Card categorie={''} />} />
          <Route exact path="MensClothing" element={<Card categorie={"category/men's clothing"} />} />
          <Route exact path="Jewelry" element={<Card categorie={'category/jewelery'} />} />
          <Route exact path="Electronics" element={<Card categorie={'category/electronics'}/>} />
          <Route exact path="WomensClothing" element={<Card categorie={"category/women's clothing"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MyContextProvider>
    </>
  );
}

export default App;
