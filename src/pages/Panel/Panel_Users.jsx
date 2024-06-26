import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Panel_Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/user/all");
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

  const columns = [
    {
      title: "Kullanıcı Adı",
      dataIndex: "userName",
      key: "userName",
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
