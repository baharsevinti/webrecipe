import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Alert, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(null);

  const navigateLoginPage = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const validateForm = () => {
    if (!userName.trim()) {
      setError("Kullanıcı adı boş olamaz");
      return false;
    }

    if (!email.trim()) {
      setError("Email alanı boş olamaz");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Geçerli bir email adresi giriniz");
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

    return true;
  };

  const register = async () => {
    try {
      if (!validateForm()) {
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/api/v1/user/signup",
        {
          userName: userName,
          password,
          email,
        }
      );

      if (response.status === 200) {
        console.log("Kayıt başarılı:", response.data.message);
        navigateLoginPage("/logIn");
      } else {
        setError("Kayıt başarısız: " + response.data.error);
      }
    } catch (error) {
      setError("Kayıt başarısız: " + error.response.data);
    }
  };

  const handleRegisterClick = async (event) => {
    event.preventDefault();
    setError(null);
    await register();
  };

  return (
    <div className="mt-8 px-4 flex flex-col items-center">
      <div className="mb-8">
        <h1 className="font-semibold text-2xl">
          Benzersiz Tarifler Oluşturmak İçin Kayıt Ol
        </h1>
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
            placeholder="Kullanıcı Adı"
            value={userName}
            onChange={handleUserNameChange}
            status={userName.trim() === "" ? "error" : ""}
            className="rounded-xl h-12 border-gray-700 px-4"
          />
        </div>

        <div className="mb-4">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            status={email.trim() === "" ? "error" : ""}
            className="rounded-xl h-12 border-gray-700 px-4"
          />
        </div>

        <div className="mb-4">
          <Input.Password
            placeholder="Şifre"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            status={password.trim() === "" ? "error" : ""}
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
            onClick={handleRegisterClick}
            className="bg-[#030712] text-white text-s mt-4 rounded-md h-12 w-full border-none hover:opacity-95"
          >
            Kayıt Ol
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
