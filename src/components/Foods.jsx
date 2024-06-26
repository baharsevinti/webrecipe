import axios from "axios";
import React, { useEffect, useState } from "react";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/recipes/all"
        );
        const receivedRecipes = response.data || [];
        setFoods(receivedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 bg-white">
      {foods.map((item, index) => (
        <div
          key={item._id}
          className="border shadow-lg rounded-lg hover:scale-105 duration-300 mb-4"
        >
          <img
            src={item.photoLink}
            alt={item.title}
            className="w-full h-[200px] object-cover rounded-t-lg "
          />
          <div className="flex justify-between px-2 py-4 text-xl">
            <p className="font-bold">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Foods;
