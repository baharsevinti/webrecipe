import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainArea = () => {
  const navigate = useNavigate();

  const navigateSignUpPage = () => {
    navigate("/signUp");
  };

  return (
    <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-black text-center flex flex-col items-center ">
      {/* Slogan */}
      <div className="mb-14">
        <h1 className="text-4xl font-bold text-left">
          Malzemelerinizle Sanat Yapın!
        </h1>
        <p className="mt-4 text-lg text-left font-semibold">
          Hoş geldiniz! Sitemizde,{" "}
          <Link to="/hazir-tarifler" className="italic underline">
            hazır tariflerden
          </Link>{" "}
          ilham alabilir veya kendi malzemelerinizi kullanarak{" "}
          <Link to="/yeni-tarifler" className="italic underline">
            benzersiz tarifler{" "}
          </Link>
          oluşturabilirsiniz. Malzemelerinizi seçin, hayal gücünüzü konuşturun
          ve mutfakta gerçek bir şef gibi hissederek yemek yapmanın keyfini
          çıkarın!
        </p>
      </div>

      {/* Buton */}
      <div>
        <button
          onClick={navigateSignUpPage}
          className=" sm:px-4 bg-gray-500 font-semibold hover:bg-gray-400 rounded-lg w-36 h-14"
        >
          Başlayın
        </button>
      </div>
    </div>
  );
};

export default MainArea;
