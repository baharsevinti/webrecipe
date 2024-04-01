import { Input } from "antd";
import React from "react";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//TODO: SignUp fonksiyonu yapılacak
//TODO: Validation yapılacak

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const navigateLoginPage = () => {
    navigate("/logIn");
  };

  const register = async () => {
    try {
      const response = await axios.post(
        "https://foodrecipee-69b7bbf0e36c.herokuapp.com/api/v1/user/signup",
        {
          username: userName,
          password,
          email,
        }
      );

      if (response.status === 201) {
        console.log("Kayıt başarılı:", response.data.message);
        navigateLoginPage();
      } else {
        console.error("Kayıt başarısız:", response.data.error);
      }
    } catch (error) {
      console.error("Kayıt başarısız:", error.response.data);
    }
  };

  const handleRegisterClick = async (event) => {
    event.preventDefault();
    await register();
  };

  return (
    <div className="mt-8 px-4 flex flex-col items-center">
      <div className="mb-8">
        <h1 className="font-semibold text-2xl">
          Benzersiz Tarifler Oluşturmak İçin Kayıt Ol
        </h1>
      </div>

      {/* Inputs */}
      <form className="flex flex-col w-full max-w-md">
        {/* User Name */}
        <div className="mb-4">
          <Input
            placeholder="Kullanıcı Adı"
            value={userName}
            onChange={handleUserNameChange}
            status={userName.trim() === "" ? "error" : ""}
            className="rounded-xl h-12 border-gray-700 px-4"
          />
        </div>

        {/* Email */}
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

        {/* Password */}
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

        {/* Button */}
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

export default LoginForm;
