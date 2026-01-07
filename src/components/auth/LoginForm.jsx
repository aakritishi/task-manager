import React, { useEffect, useState } from "react";
import Label from "../ui/Label";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );
    if (!validUser) {
      setError(
        "Invalid user/ credentials doesnt match with the signed up data"
      );
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(validUser));
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border-none rounded shadow-lg">
      <form onSubmit={handleSubmit}>
        <h1 className="text-xl font-medium text-center md:text-2xl">
          Login Form
        </h1>
        <Label text="Email" htmlFor="email" />
        <div className="relative w-full">
          <MdEmail className="absolute left-3 top-1/2 -translate-y-3.5 text-gray-400" />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <Label text="Password" htmlFor="password" />
        <div className="relative w-full">
          <FaLock className="absolute left-3 top-1/2 translate-y-4 text-gray-400" />
        </div>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={"Enter your password"}
        />

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <div className="flex justify-center items-center my-3">
          <Button type="submit">Login</Button>
        </div>

        <p className="text-center">
          Don't have an account?
          <span className="underline hover:to-blue-500">
            <Link to="/signup"> Signup here</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
