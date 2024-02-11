import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectRoutes({ children, requiredRoles }) {
  const { isAuthenticated, userRoles } = useContext(AuthContext);

  useEffect(() => {}, [isAuthenticated, userRoles, requiredRoles]);

  const hasRequiredRoles = () => {
    if (!requiredRoles) {
      return true;
    }

    return requiredRoles.some((role) => userRoles.includes(role));
  };

  return isAuthenticated && hasRequiredRoles() ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectRoutes;
