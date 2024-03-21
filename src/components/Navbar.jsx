import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { RiAiGenerate } from "react-icons/ri";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isHiddenInfo, isHiddenButtons }) => {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const navigateSignUpPage = () => {
    navigate("/signUp");
  };
  const navigateLoginPage = () => {
    navigate("/logIn");
  };

  const navigateRecipes = () => {
    navigate("/recipes");
  };

  const navigateHomePage = () => {
    navigate("/");
  };

  const navigateMakeRecipe = () => {
    navigate("/makeRecipe");
  };

  // Butonların görünüp görünmedği durumlara göre stil değişecek
  const navbarStyle =
    isHiddenButtons && isHiddenInfo
      ? "max-w-[1640] mx-auto flex justify-between items-center p-4"
      : "max-w-[1640] mx-auto flex justify-around items-center p-4";

  return (
    <>
      <div className={navbarStyle}>
        {/* Sol Taraf */}
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} style={{ color: "orange" }} />
          </div>
          <h1
            onClick={navigateHomePage}
            className="text-white text-2xl sm:text-3xl lg:text-4xl px-2 cursor-pointer"
          >
            Go <span className="font-bold">Food</span>
          </h1>
        </div>

        {/* BUTTONS SİDE */}
        {!isHiddenInfo && (
          <div className="hidden lg:flex text-xl text-white">
            <button className="sm:px-3 hover:underline hover:opacity-50">
              Hakkımızda
            </button>
            <button className="sm:px-3 hover:underline hover:opacity-50">
              İletişim
            </button>
            <button
              onClick={navigateRecipes}
              className="sm:px-3 hover:underline hover:opacity-50"
            >
              Tarifler
            </button>
          </div>
        )}

        {/* LOGIN / SIGNUP BUTTON */}
        {!isHiddenButtons && (
          <div className="text-2xl ">
            <button
              onClick={navigateSignUpPage}
              className="sm:px-4 mr-2 bg-gray-400 hover:bg-gray-200 rounded-lg text-lg sm:text-2xl
      "
            >
              Kayıt Ol
            </button>
            <button
              onClick={navigateLoginPage}
              className="sm:px-4 bg-gray-400 hover:bg-gray-200 rounded-lg text-lg sm:text-2xl"
            >
              Giriş Yap
            </button>
          </div>
        )}

        {/* MOBİLE MENU - KÜÇÜK EKRAN*/}

        {/* Sadece nav true olduğu zaman gözükecek */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 "></div>
        ) : (
          ""
        )}

        {/* Side Menu*/}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-gray-400 z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-black text-3xl p-4 ">
            Go <span className="font-bold text-white"> Food</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-900 cursor-pointer">
              <li onClick={navigateRecipes} className="text-xl flex py-4 ">
                <BiFoodMenu size={26} className="mr-4" /> Hazır Tarifler
              </li>
              <li onClick={navigateMakeRecipe} className="text-xl flex py-4">
                <RiAiGenerate size={26} className="mr-4" /> Kendi Tarifinizi
                Oluşturun
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
