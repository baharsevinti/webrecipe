import { Image, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Panel_Recipes = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://bili-recipe-app-b029f5efbaee.herokuapp.com/api/v1/recipes/all"
        );
        setData(response.data); // API'den gelen veriyi state'e set et
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Tarif listesi yükleniyor...</p>;
  }

  if (error) {
    return <p>Hata oluştu: {error.message}</p>;
  }

  const deleteRecipe = async (recipeId) => {
    try {
      // veritabanından tarifi siliyoruz
      await axios.delete(
        "https://bili-recipe-app-b029f5efbaee.herokuapp.com/api/v1/recipes/deleteById/${recipeId}"
      );

      // state'den siliyoruz
      setData((prevData) =>
        prevData.filter((recipe) => recipe.id !== recipeId)
      );
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const columns = [
    {
      title: "Tarif Adı",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tarif Türü",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Resim",
      dataIndex: "photo_link",
      key: "photo_link",
      render: (text) => <Image src={text} alt="Resim" width={50} />,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => deleteRecipe(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Panel_Recipes;
