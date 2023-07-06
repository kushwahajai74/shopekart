import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);

  return isAuthenticated === true ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
