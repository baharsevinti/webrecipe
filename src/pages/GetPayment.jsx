import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardForm from "../components/CardForm";

const GetPayment = () => {
  const [amount, setAmount] = useState("");
  const location = useLocation();

  // Önceki sayfadan gelen price değerini al
  useEffect(() => {
    if (location.state && location.state.price) {
      setAmount(location.state.price);
    }
  }, [location]);

  return (
    <div style={{ textAlign: "center" }}>
      <CardForm amount={amount} />

      {/* Amount göster */}
      <div className="text-center mt-4">
        <h3 className="text-3xl font-semibold">Ödeme Tutarı: ${amount}</h3>
      </div>
    </div>
  );
};

export default GetPayment;
