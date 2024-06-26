import { Button, Input, message } from "antd";
import axios from "axios";
import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const CardForm = ({ amount }) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const navigate = useNavigate();

  const navigateHistory = () => {
    navigate("/paymentHistory");
  };

  const validateCard = () => {
    // Kart numarası doğrulaması
    if (!/^\d{16}$/.test(cardNumber)) {
      message.error("Geçersiz kart numarası");
      return false;
    }

    // Son kullanma tarihi doğrulaması
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      message.error("Geçersiz son kullanma tarihi");
      return false;
    }

    // CVC doğrulaması
    if (!/^\d{3}$/.test(cvc)) {
      message.error("Geçersiz CVC");
      return false;
    }

    // İsim doğrulaması
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      message.error("Geçersiz isim");
      return false;
    }

    return true;
  };

  const getPayment = async () => {
    if (!validateCard()) {
      // Kart bilgileri geçerli değilse işlem yapma
      return;
    }

    try {
      const currentDate = new Date(); // Şu anki tarihi al
      const response = await axios.post(
        "http://localhost:8080/api/v1/payments/pay",
        {
          userName: name,
          amount: parseFloat(amount),
          paymentDate: currentDate.toISOString(), // ISO 8601 formatında tarih
        }
      );

      console.log(response.data);
      navigateHistory();
    } catch (error) {
      console.error("Ödeme yapılırken bir hata oluştu:", error);
    }
  };

  return (
    <div className="p-2">
      {/* Card */}
      <div className="my-8 mx-auto text-center">
        <Cards
          name={name}
          number={cardNumber}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </div>

      {/* Card Form */}
      <form className="mt-8 mx-auto text-center flex flex-col items-center">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          className="w-full lg:w-96 p-2 mb-4 border rounded-md shadow-md focus:shadow-lg placeholder:text-gray-800"
        />
        <Input
          type="number" // Sadece sayı girişine izin verir
          name="number"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => {
            // Sadece ilk 16 karakteri al
            setCardNumber(e.target.value.slice(0, 16));
          }}
          onFocus={(e) => setFocus(e.target.name)}
          className="w-full lg:w-96 p-2 mb-4 border rounded-md shadow-md focus:shadow-lg placeholder:text-gray-800"
        />
        <Input
          type="text" // Sadece sayı girişine izin verir
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(e) => {
            // Sadece ilk 5 karakteri al
            setExpiry(e.target.value.slice(0, 5));
          }}
          onFocus={(e) => setFocus(e.target.name)}
          className="w-full lg:w-96 p-2 mb-4 border rounded-md shadow-md focus:shadow-lg placeholder:text-gray-800"
        />
        <Input
          type="number" // Sadece sayı girişine izin verir
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => {
            // Sadece ilk 3 karakteri al
            setCvc(e.target.value.slice(0, 3));
          }}
          onFocus={(e) => setFocus(e.target.name)}
          className="w-full lg:w-96 p-2 mb-4 border rounded-md shadow-md focus:shadow-lg placeholder:text-gray-800"
        />

        <Button
          onClick={getPayment}
          type="primary"
          size="large"
          className="w-44 bg-gray-500 text-2xl font-bold"
        >
          Ödeme Yap
        </Button>
      </form>

      <Footer />
    </div>
  );
};

export default CardForm;
