// HomePage.jsx

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";
import { Divider } from "antd";
import Foods from "../components/Foods";

const HomePage = () => {
  return (
    <div class="flex flex-col min-h-screen bg-gray-800">
      <div class="flex-grow ">
        <Navbar />

        <Hero />

        <InfoCard />

        <Foods />
      </div>

      <Divider dashed className="bg-gray-300" />

      <Footer />
    </div>
  );
};

export default HomePage;
