import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "context/AuthContext";

export const PrivateWrapper = () => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Outlet /> : <Navigate to="login" />;
};
