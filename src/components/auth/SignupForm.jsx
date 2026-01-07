import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Label from "../ui/Label";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const SignupForm = () => {
  const [isSignupData, setIsSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setIsSignupData({ ...isSignupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const email = isSignupData.email.trim().toLowerCase();
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
      setError("User with this email already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      username: isSignupData.username,
      email: email,
      password: isSignupData.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto border-none shadow-md rounded-md mt-10">
      <form className="p-6" onSubmit={handleSubmit}>
        <h1 className="text-xl font-medium text-center md:text-2xl">Register Form</h1>
        <Label text="Username" htmlFor="username" />
        <div className="w-full relative">
          <FaUser className="absolute left-3 top-1/2 translate-y-4 text-gray-400" />
        </div>
        <Input
          type="text"
          name="username"
          value={isSignupData.username}
          onChange={handleChange}
          placeholder="Enter your username"
        />

        <Label text="Email" htmlFor="email" />
        <div className="relative w-full">
          <MdEmail className="absolute left-3 top-1/2 translate-y-4 text-gray-400" />
        </div>
        <Input
          type="email"
          name="email"
          value={isSignupData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <Label text="Password" htmlFor="password" />
        <div className="relative w-full">
          <FaLock className="absolute left-3 top-1/2 translate-y-4 text-gray-400" />
        </div>
        <Input
          type="password"
          name="password"
          value={isSignupData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        {error && <h1 className="text-red-500">{error}</h1>}

        <div className="flex justify-center items-center my-3">
          <Button type="submit">Register</Button>
        </div>

        <h1 className="text-center">Already registered? <span className="underline"><Link to="/login">Login here</Link></span></h1>
      </form>
    </div>
  );
};

export default SignupForm;
