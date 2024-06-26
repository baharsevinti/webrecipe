import { Alert, Spin, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("bahar");

  const columns = [
    {
      title: "Kullanıcı Adı",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Tutar",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <span>{text} $</span>,
    },
    {
      title: "Ödeme Tarihi",
      dataIndex: "paymentDate",
      key: "paymentDate",
      render: (text) => new Date(text).toLocaleString(),
    },
  ];

  useEffect(() => {
    const fetchPayments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/payments/listByUser?userName=${username}`
        );
        setPayments(response.data);
        setError(null);
      } catch (error) {
        console.error("Ödeme geçmişi alınırken bir hata oluştu:", error);
        setError("Ödeme geçmişi alınırken bir hata oluştu.");
      }
      setLoading(false);
    };

    if (username.trim() !== "") {
      fetchPayments();
    }
  }, [username]); // username state'i değiştiğinde yeniden istek yap

  return (
    <div className="container mx-auto">
      <Navbar isHiddenButtons={true} />
      <h1 className="text-3xl font-bold my-8 flex justify-center">
        Ödeme Geçmişi
      </h1>

      {loading && (
        <div className="flex justify-center">
          <Spin size="large" />
        </div>
      )}
      {error && <Alert message={error} type="error" showIcon />}
      {!loading && !error && <Table columns={columns} dataSource={payments} />}
    </div>
  );
};

export default PaymentHistory;
