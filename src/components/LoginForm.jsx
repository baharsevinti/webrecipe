import { Input } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Alert } from "antd";

//TODO: Validation yapılacak

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

  const login = async () => {
    try {
      const response = await axios.post(
        "https://bili-recipe-app-b029f5efbaee.herokuapp.com/api/v1/user/login",
        {
          username: email,
          password,
          email,
        }
      );
  
      if (response.status === 200) {
        const data = response.data;
  
        console.log("Login successful:", data.token);
  
        if (email === 'admin@example.com') {
          
          navigateAdminPanel();
        } else {
          
          navigateMakeRecipe();
        }
      } else {
        setError(response.data.message);
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

      {/* Display error message */}
      {error && (
        <Alert
          message="Error"
          description={"Kullanıcı adı veya şifre hatalı"}
          type="error"
          showIcon
          closable
          onClose={() => setError(null)}
          className="mb-4"
        />
      )}

      {/* Inputs */}
      <form className="flex flex-col w-full max-w-md">
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
