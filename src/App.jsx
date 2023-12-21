import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen min-w-full">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
