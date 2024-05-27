import React, { useEffect, useState } from "react";
import { Space, Table, Image } from "antd";
import axios from "axios";

const Panel_Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get("https://bili-recipe-app-b029f5efbaee.herokuapp.com/api/v1/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user list:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserList();
  }, []);

  if (loading) {
    return <p>Kullanıcı listesi yükleniyor...</p>;
  }

  if (error) {
    return <p>Hata oluştu: {error.message}</p>;
  }

  // TODO: DB'DEKİ JSON DOYSASINA UYGUN DATAINDEX YAZILACAK
  const columns = [
    {
      title: "Kullanıcı Adı",
      dataIndex: "username",
      key: "username",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Rol",
      dataIndex: "role",
      key: "role",
    },
  ];

  return <Table columns={columns} dataSource={users} />;
};

export default Panel_Users;
