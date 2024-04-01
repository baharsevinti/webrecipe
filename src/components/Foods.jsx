import React, { useState, useEffect } from "react";
import axios from "axios";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://foodrecipee-69b7bbf0e36c.herokuapp.com/api/v1/chat"
        );
        const data = response.data;

        const tarifler = data && data.tarifler ? data.tarifler : [];
        setFoods(tarifler);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 bg-white">
      {foods.map((item, index) => (
        <div
          key={item._id}
          className="border shadow-lg rounded-lg hover:scale-105 duration-300"
        >
          <img
            src={item.resimLinki}
            alt={item.baslik}
            className="w-full h-[200px] object-cover rounded-t-lg "
          />
          <div className="flex justify-between px-2 py-4 text-xl">
            <p className="font-bold">{item.baslik}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Foods;
