import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { RiAiGenerate } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isHiddenInfo, isHiddenButtons }) => {
  const [nav, setNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const navigateSignUpPage = () => {
    navigate("/signUp");
  };

  const navigateAboneUpPage = () => {
    navigate("/abone");
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

  const navigateFavoriPage = () => {
    navigate("/favori"); // Navigate to the Favori page
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Aranan:", searchQuery);
  };

  const navbarStyle =
    isHiddenButtons && isHiddenInfo
      ? "max-w-[1640] mx-auto flex justify-around items-center p-4"
      : "max-w-[1640] mx-auto flex justify-around items-center p-4";

  return (
    <>
      <div className={navbarStyle}>
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} style={{ color: "orange" }} />
          </div>
          <h1
            onClick={navigateHomePage}
            className="text-white text-2xl sm:text-3xl lg:text-4xl px-2 cursor-pointer"
          >
            Yemek <span className="font-bold">Sizin</span>
          </h1>
        </div>

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

        {!isHiddenButtons && (
          <div className="text-2xl flex items-center">
            <button
              onClick={navigateSignUpPage}
              className="sm:px-4 mr-2 bg-gray-400 hover:bg-gray-200 rounded-lg text-lg sm:text-2xl"
            >
              Kayıt Ol
            </button>

            <button
              onClick={navigateLoginPage}
              className="sm:px-4 mr-2 bg-gray-400 hover:bg-gray-200 rounded-lg text-lg sm:text-2xl"
            >
              Giriş Yap
            </button>

            <button
              onClick={navigateAboneUpPage}
              className="sm:px-3 mr-2 bg-orange-500 hover:bg-gray-100 rounded-lg text-lg sm:text-1xl flex items-center"
            >
              <AiOutlineShoppingCart size={26} className="mr-2" />
              Üye Ol
            </button>
          </div>
        )}

        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            placeholder="Ara..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 mr-4 rounded-lg border-none focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            <AiOutlineSearch />
          </button>
        </form>

        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 "></div>
        ) : (
          ""
        )}

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
            Yemek <span className="font-bold text-white"> Bizim</span>
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
              <li onClick={navigateFavoriPage} className="text-xl flex py-4 ">
                <AiOutlineHeart size={26} className="mr-4" /> Favori Tarifler
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;


