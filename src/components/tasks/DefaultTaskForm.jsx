import React, { useState } from "react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FaTasks } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DefaultTaskForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    is_completed: false,
  });

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const tasks = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      is_completed: formData.is_completed,
      is_default: true,
    };

    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    const existingTasks = Array.isArray(stored) ? stored : [];

    existingTasks.push(tasks);

    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    setFormData({
      title: "",
      description: "",
      is_completed: false,
    });

    navigate("/home");
    
  }
  return (
    <div className="max-w-md shadow-md ronded border-none mx-auto p-6 mt-10">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center font-medium text-xl md:text-2xl">
          Default Tasks Form
        </h1>
        <Label text="Task Name" htmlFor="title" />
        <div className="w-full relative">
          <FaTasks className="absolute top-1/2 translate-y-4 left-2"/>
        </div>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task name"/>

        <Label text="Description" htmlFor="description"/>
        <div className="w-full relative">
          <MdDescription className="absolute top-1/2 translate-y-4 left-3 text-lg"/>
        </div>
        <Input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter task description"/>

          <div className="flex justify-center items-center my-3">
            <Button type={"submit"}>Add Task</Button>
          </div>

      </form>
    </div>
  );
};

export default DefaultTaskForm;
