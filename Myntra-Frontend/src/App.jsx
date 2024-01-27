import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeItems from "./Components/HomeItems";
import { Outlet } from "react-router-dom";
import FetchItem from "./Components/FetchItem";
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const fetchStatus = useSelector((store) => store.FetchStatus);
  return (
    <>
      <Header />
      <FetchItem />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
