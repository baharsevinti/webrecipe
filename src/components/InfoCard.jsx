import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//TODO: Link ile yönlendirme yapılacak

const InfoCard = () => {
  const navigate = useNavigate();

  const navigateRecipes = () => {
    navigate("/recipes");
  };

  return (
    <div className="bg-white border rounded-lg text-center p-4 m-2">
      <h1 className="text-4xl font-bold">Malzemelerinizle Sanat Yapın!</h1>
      <p className="mt-4 text-2xl text-left">
        Hoş geldiniz! Sitemizde,{" "}
        <Link to="/recipes" className="italic underline">
          hazır tariflerden
        </Link>{" "}
        ilham alabilir veya kendi malzemelerinizi kullanarak{" "}
        <Link to="/makeRecipe" className="italic underline">
          benzersiz tarifler
        </Link>{" "}
        oluşturabilirsiniz.
      </p>
      <p className="mt-4 text-2xl text-left">
        Malzemelerinizi seçin, hayal gücünüzü konuşturun ve mutfakta gerçek bir
        şef gibi hissederek yemek yapmanın keyfini çıkarın!
      </p>
      <button
        onClick={navigateRecipes}
        className="mt-4 sm:px-4 bg-gray-400 hover:bg-gray-500 rounded-lg text-lg sm:text-2xl h-12 font-semibold"
      >
        Hemen Dene !
      </button>
    </div>
  );
};

export default InfoCard;
