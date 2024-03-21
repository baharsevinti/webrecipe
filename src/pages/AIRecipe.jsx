import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MakeRecipe from "../components/MakeRecipe";

const AIRecipe = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between ">
      <div className="bg-gray-800 h-[80px]">
        <Navbar isHiddenInfo={true} isHiddenButtons={true} />
      </div>

      <MakeRecipe />

      <div className="bg-gray-800">
        <Footer linkTextColors="white" copyrightTextColor="white" />
      </div>
    </div>
  );
};

export default AIRecipe;
