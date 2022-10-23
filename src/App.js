import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Navhome from './components/navhome/Navhome';


function App() {
  return (
    <>
      <header>
        <Navbar />
        <Navhome />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/users" element={<div>Users</div>} />
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
