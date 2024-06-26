import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Alert, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigateMakeRecipe = () => {
    navigate("/makeRecipe");
  };

  const navigateAdminPanel = () => {
    navigate("/adminPanel");
  };

  const validateForm = () => {
    if (!email.trim()) {
      setError("Email alanı boş olamaz");
      return false;
    }

    if (!password.trim()) {
      setError("Şifre alanı boş olamaz");
      return false;
    }

    if (password.trim().length < 6) {
      setError("Şifre en az 6 karakter olmalıdır");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Geçerli bir email adresi giriniz");
      return false;
    }

    return true;
  };

  const login = async () => {
    try {
      if (!validateForm()) {
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        console.log("DATA:", response.data);
        const role = response.data;

        if (role === "ADMIN") {
          navigateAdminPanel();
        } else {
          navigateMakeRecipe();
        }
      } else {
        setError(response.data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    setError(null);
    login();
  };

  return (
    <div className="mt-8 px-4 flex flex-col items-center">
      <div className="mb-8">
        <h1 className="font-semibold text-2xl">Hoş Geldiniz!</h1>
      </div>

      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          closable
          onClose={() => setError(null)}
          className="mb-4"
        />
      )}

      <form className="flex flex-col w-full max-w-md">
        <div className="mb-4">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="rounded-xl h-12 border-gray-700 px-4"
          />
        </div>

        <div className="mb-4">
          <Input.Password
            placeholder="Şifre"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="rounded-xl h-12 border-gray-700 px-4"
            iconRender={(visible) =>
              visible ? (
                <EyeTwoTone size={35} />
              ) : (
                <EyeInvisibleOutlined size={35} />
              )
            }
          />
        </div>

        <div>
          <button
            onClick={handleLoginClick}
            className="bg-[#030712] text-white text-s mt-4 rounded-md h-12 w-full border-none hover:opacity-95"
          >
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
