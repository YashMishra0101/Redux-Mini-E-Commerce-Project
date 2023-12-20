import React from "react";
import NavBar from "./components/NavBar";
import ApiFetch from "./components/ApiFetch";
import CheckOut from "./pages/CheckOut";
import Cards from "./pages/home/Cards";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="min-h-screen min-w-full">
      <NavBar />
      <Routes>
        <Route path="/" element={<ApiFetch />} />
        <Route path="cards" element={<Cards/>} />
        <Route path="checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
