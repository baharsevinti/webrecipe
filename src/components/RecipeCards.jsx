import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import axios from "axios";

const RecipeCards = () => {
  const [recipeDetailOpen, setRecipeDetailOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/hazirtarifal"
        );
        // Veriyi düzenle ve sadece tarifler kısmını al
        const receivedRecipes = response.data.tarifler || [];
        setRecipes(receivedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setRecipeDetailOpen(true);
  };

  const closeModal = () => {
    setRecipeDetailOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
        {recipes.map((recipe) => (
          <div
            onClick={() => openModal(recipe)}
            key={recipe.id}
            className="bg-red-300 p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{recipe.baslik}</h3>
            <p className="text-gray-600 capitalize">{recipe.tur}</p>
          </div>
        ))}
      </div>

      {recipeDetailOpen && selectedRecipe && (
        <Modal
          title={selectedRecipe.baslik}
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
                  {selectedRecipe.malzemeler.map((malzeme, index) => (
                    <li
                      className="text-gray-600 text-base capitalize"
                      key={index}
                    >
                      {malzeme}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tarif Adımları */}
              <div className="flex-1 pl-4">
                <p className="text-gray-600 p-1 text-lg capitalize font-bold decoration-2 underline">
                  Tarif Adımları
                </p>

                <ol className="list-decimal pl-4 font-semibold">
                  {selectedRecipe.tarif.map((adim, index) => (
                    <li
                      className="text-gray-600 text-base capitalize"
                      key={index}
                    >
                      {adim}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <img
            className="mt-4 mx-auto max-h-[420px]"
            src={selectedRecipe.resimLinki}
            alt=""
          />
        </Modal>
      )}
    </div>
  );
};

export default RecipeCards;
