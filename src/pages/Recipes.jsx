import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeCards from "../components/RecipeCards";

const Recipes = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between ">
      <div className="bg-gray-800 h-[80px]">
        <Navbar isHiddenInfo={true} isHiddenButtons={true} />
      </div>

      <RecipeCards />

      <div className="bg-gray-800">
        <Footer linkTextColors="white" copyrightTextColor="white" />
      </div>
    </div>
  );
};

export default Recipes;
