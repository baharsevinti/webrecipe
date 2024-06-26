import { SearchOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const RecipeCards = () => {
  const [recipeDetailOpen, setRecipeDetailOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Arama terimi için state

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/recipes/all"
        );
        const receivedRecipes = response.data || [];
        setRecipes(receivedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  // Tarif başlığında harf duyarlı arama yapacak fonksiyon
  const filterRecipes = (recipe) => {
    const title = recipe.title.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return title.includes(searchTermLower);
  };

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setRecipeDetailOpen(true);
  };

  const closeModal = () => {
    setRecipeDetailOpen(false);
    setSelectedRecipe(null);
  };

  const toggleFavorite = (recipe) => {
    if (favorites.includes(recipe)) {
      setFavorites(favorites.filter((fav) => fav.id !== recipe.id));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="container mx-auto my-8">
      {/* Arama kutusu */}
      <Input
        placeholder="Tarif ara..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        className="mb-4 bg-gray-300 flex justify-center max-w-[300px] mx-auto"
        suffix={<SearchOutlined style={{ color: "#1890ff" }} />}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {recipes.filter(filterRecipes).map((recipe) => (
          <div
            key={recipe.id}
            className="bg-red-300 p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <p className="text-gray-600 capitalize">{recipe.type}</p>
            <button
              onClick={() => openModal(recipe)}
              className="text-blue-500 underline"
            >
              Detaylar
            </button>
            <button
              onClick={() => toggleFavorite(recipe)}
              className="mt-2 p-2 rounded-md flex items-center justify-center"
            >
              {favorites.includes(recipe) ? (
                <AiFillHeart className="text-red-500 mr-2" />
              ) : (
                <AiOutlineHeart className="text-red-500 mr-2" />
              )}
              Favori
            </button>
          </div>
        ))}
      </div>

      {recipeDetailOpen && selectedRecipe && (
        <Modal
          title={selectedRecipe.title}
          centered
          visible={recipeDetailOpen}
          onOk={closeModal}
          onCancel={closeModal}
          footer={null}
          width={["100%", "100%", "100%", "60%"]}
        >
          <div>
            {/* Malzemeler */}
            <div className="flex">
              <div className="flex-1">
                <p className="text-gray-600 p-1 text-lg capitalize font-bold decoration-2 underline">
                  Malzemeler
                </p>
                <ul className="list-disc pl-4 font-semibold">
                  <li className="text-gray-600 text-base capitalize">
                    {selectedRecipe.ingredients}
                  </li>
                </ul>
              </div>

              {/* Tarif Adımları */}
              <div className="flex-1 pl-4">
                <p className="text-gray-600 p-1 text-lg capitalize font-bold decoration-2 underline">
                  Tarif Adımları
                </p>
                <ol className="list-decimal pl-4 font-semibold">
                  <li className="text-gray-600 text-base capitalize" key={0}>
                    {selectedRecipe.recipe}
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <img
            className="mt-4 mx-auto max-h-[420px]"
            src={selectedRecipe.photoLink}
            alt=""
          />
        </Modal>
      )}
    </div>
  );
};

export default RecipeCards;
