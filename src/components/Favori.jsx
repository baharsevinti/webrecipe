import { Modal } from "antd";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const recipes = [
  {
    id: 1,
    baslik: "Karnıyarık",
    tur: "Ana Yemek",
    malzemeler: ["Patlıcan", "Kıyma", "Soğan", "Domates"],
    tarif: [
      "Patlıcanları kızartın",
      "Kıymayı soğanla kavurun",
      "Domates ekleyin",
      "Patlıcanları doldurun ve pişirin",
    ],
    resimLinki: "https://example.com/karnıyarık.jpg",
  },
  {
    id: 2,
    baslik: "Karnıyarık",
    tur: "Ana Yemek",
    malzemeler: ["Patlıcan", "Kıyma", "Soğan", "Domates"],
    tarif: [
      "Patlıcanları kızartın",
      "Kıymayı soğanla kavurun",
      "Domates ekleyin",
      "Patlıcanları doldurun ve pişirin",
    ],
    resimLinki: "https://example.com/karnıyarık.jpg",
  },
  {
    id: 3,
    baslik: "Karnıyarık",
    tur: "Ana Yemek",
    malzemeler: ["Patlıcan", "Kıyma", "Soğan", "Domates"],
    tarif: [
      "Patlıcanları kızartın",
      "Kıymayı soğanla kavurun",
      "Domates ekleyin",
      "Patlıcanları doldurun ve pişirin",
    ],
    resimLinki: "https://example.com/karnıyarık.jpg",
  },

  {
    id: 2,
    baslik: "Karnıyarık",
    tur: "Ana Yemek",
    malzemeler: ["Patlıcan", "Kıyma", "Soğan", "Domates"],
    tarif: [
      "Patlıcanları kızartın",
      "Kıymayı soğanla kavurun",
      "Domates ekleyin",
      "Patlıcanları doldurun ve pişirin",
    ],
    resimLinki: "https://example.com/karnıyarık.jpg",
  },
  {
    id: 3,
    baslik: "Karnıyarık",
    tur: "Ana Yemek",
    malzemeler: ["Patlıcan", "Kıyma", "Soğan", "Domates"],
    tarif: [
      "Patlıcanları kızartın",
      "Kıymayı soğanla kavurun",
      "Domates ekleyin",
      "Patlıcanları doldurun ve pişirin",
    ],
    resimLinki: "https://example.com/karnıyarık.jpg",
  },
];

const RecipeApp = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeDetailOpen, setRecipeDetailOpen] = useState(false);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setRecipeDetailOpen(true);
  };

  const closeModal = () => {
    setRecipeDetailOpen(false);
    setSelectedRecipe(null);
  };

  const [favorites, setFavorites] = useState([]);
  const [favoritesModalOpen, setFavoritesModalOpen] = useState(false);

  //   useEffect(() => {
  //     const fetchFavorites = async () => {
  //       try {
  //         const response = await axios.get(
  //           http://localhost:8080/api/v1/users/${user.id}/favorites
  //         );
  //         const receivedFavorites = response.data || [];
  //         setFavorites(receivedFavorites);
  //       } catch (error) {
  //         console.error("Error fetching favorites:", error);
  //       }
  //     };

  //     if (user) {
  //       fetchFavorites();
  //     }
  //   }, [user]);

  //   const removeFromFavorites = async (recipeId) => {
  //     try {
  //       await axios.delete(
  //         http://localhost:8080/api/v1/users/${user.id}/favorites/${recipeId}
  //       );
  //       setFavorites(favorites.filter((recipe) => recipe.id !== recipeId));
  //     } catch (error) {
  //       console.error("Error removing from favorites:", error);
  //     }
  //   };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl flex justify-center mb-20">FAVORİ TARİFLER</h1>

      {/* FAVORİ TARF LİSTESİ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div
            onClick={() => openModal(recipe)}
            key={recipe.id}
            className="bg-green-400 p-4 rounded-md shadow-md transition-transform transform hover:scale-105 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">{recipe.baslik}</h3>
            <p className="text-gray-600 capitalize">{recipe.tur}</p>

            <button
              onClick={() => removeFromFavorites(recipe.id)}
              className="text-red-600 mt-2"
            >
              <AiFillHeart size={26} />
            </button>
          </div>
        ))}
      </div>

      {/* TARİFF DETAY MODAL'I*/}
      {recipeDetailOpen && selectedRecipe && (
        <Modal
          title={selectedRecipe.baslik}
          centered
          open={recipeDetailOpen}
          onOk={closeModal}
          onCancel={closeModal}
          footer={null}
          width="60%"
        >
          <div>
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

            <img
              className="mt-4 mx-auto max-h-96"
              src={selectedRecipe.resimLinki}
              alt={selectedRecipe.baslik}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default RecipeApp;
