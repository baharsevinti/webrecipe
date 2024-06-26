import { Button, Form, Image, Input, Modal, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Panel_Recipes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/recipes/all"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (record) => {
    setSelectedRecipe(record);
    setModalVisible(true);
    form.setFieldsValue({
      title: record.title,
      type: record.type,
      photoLink: record.photoLink,
      ingredients: record.ingredients,
      recipe: record.recipe,
    });
  };

  const handleAddOrUpdateRecipe = async (values) => {
    try {
      if (selectedRecipe) {
        await axios.put(
          `http://localhost:8080/api/v1/recipes/update/${selectedRecipe.id}`,
          values
        );
      } else {
        await axios.post("http://localhost:8080/api/v1/recipes/add", values);
      }
      setModalVisible(false);
      form.resetFields();
      setSelectedRecipe(null);
      fetchData();
    } catch (error) {
      console.error(
        `Error ${selectedRecipe ? "updating" : "adding"} recipe:`,
        error.response.data
      );
    }
  };

  // Tarif silme
  const deleteRecipe = async (id) => {
    try {
      await axios.get(
        `http://localhost:8080/api/v1/recipes/deleteById?id=${id}`
      );
      fetchData(); // Tariflerin güncellenmiş listesini almak için
    } catch (error) {
      console.error("Error deleting recipe:", error.response.data);
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
      dataIndex: "photoLink",
      key: "photoLink",
      render: (text) => <Image src={text} alt="Resim" width={50} />,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleEditClick(record)} type="link">
            Düzenle
          </Button>
          <Button onClick={() => deleteRecipe(record.id)} type="link" danger>
            Sil
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div>
        <div className="flex justify-end">
          <Button
            className="bg-blue-500"
            type="primary"
            onClick={() => {
              setSelectedRecipe(null);
              setModalVisible(true);
            }}
          >
            Tarif Ekle
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={data.map((item) => ({ ...item, key: item.id }))}
        />
      </div>

      <Modal
        title={selectedRecipe ? "Tarif Düzenle" : "Tarif Ekle"}
        open={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          setSelectedRecipe(null);
          form.resetFields();
        }}
        footer={[
          <Button
            key="cancel"
            onClick={() => {
              setModalVisible(false);
              setSelectedRecipe(null);
              form.resetFields();
            }}
          >
            İptal
          </Button>,
          <Button key="submit" type="primary" onClick={form.submit}>
            Kaydet
          </Button>,
        ]}
      >
        <Form form={form} onFinish={handleAddOrUpdateRecipe}>
          {/* AD */}
          <Form.Item
            name="title"
            label="Tarif Adı"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          {/* TARİF TÜRÜ */}
          <Form.Item
            name="type"
            label="Tarif Türü"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          {/* TARİF */}
          <Form.Item
            name="recipe"
            label="Tarif Açıklaması"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          {/* Malzemeler */}
          <Form.Item
            name="ingredients"
            label="Malzemeler"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          {/* Resim */}
          <Form.Item
            name="photoLink"
            label="Resim Linki"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Panel_Recipes;
