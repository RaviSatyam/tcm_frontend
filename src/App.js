/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Signup/Register";
import Sidebar from "./Govt/Sidebar";
import Sidebar_MRV from "./MRV/Sidebar_MRV";
import NotFound from "./NotFound";
import Sidebar_Emitter from "./Emitter/Sidebar_Emitter";
import Button from "./Home/Button";
import PairHashPack from "./hashconnect/PairHashPack";
import HeroSection from "./HomePage/HeroSection";
import Test from "./HomePage/Test";
import Navbar from "./Emitter/Navbar";
import SellerTable from "./Emitter/Primary/SellerPortal";
import Buy from "./Emitter/Primary/Buy";
import SellerPortal from "./Emitter/Primary/SellerPortal";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route exact path="/button" element={<Button />} />
        <Route exact path="/pair" element={<PairHashPack />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/test" element={<Test />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Sidebar_MRV" element={<Sidebar_MRV />} />
        <Route path="/Sidebar_Emitter" element={<Sidebar_Emitter />} />
        <Route path="/emitter" element={<Navbar />} />
        <Route path="/tab" element={<SellerTable/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/seller_portal" element={<SellerPortal/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
