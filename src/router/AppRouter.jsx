import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../pages/MainLayout";
import DefaultTaskForm from "../components/tasks/DefaultTaskForm";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={
            JSON.parse(localStorage.getItem("tasks"))?.length > 0 ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/default-tasks" replace />
            )
          }
        />
        <Route path="home" element={<Home />} />
        <Route path="default-tasks" element={<DefaultTaskForm />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
