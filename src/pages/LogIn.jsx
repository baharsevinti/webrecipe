import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

const LogIn = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      {/* Navbar */}
      <div>
        <Navbar isHiddenInfo={true} isHiddenButtons={true} />
      </div>

      {/* Main Content */}
      <div className="flex-1 sm:p-0 md:p-8 lg:p-16 bg-white flex-shrink-0">
        <LoginForm />
      </div>

      {/* Footer */}
      <div>
        <Footer linkTextColors="black" copyrightTextColor="black" />
      </div>
    </div>
  );
};

export default LogIn;
