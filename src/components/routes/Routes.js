import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";

import Home from "../pages/Home";
import ListWork from "../pages/ListWork";
import Login from "../pages/Login";
import ManagerUser from "../pages/ManagerUser";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/manager-user" element={<ManagerUser />} />
      <Route path="/list-work" element={<ListWork />} />
    </Routes>
  );
};

export default Routers;
