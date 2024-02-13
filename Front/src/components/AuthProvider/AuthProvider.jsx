import { useState, useEffect } from "react";
import { AuthContext } from "../../context";
import {
  loginUser as login,
  logout as signout,
  hasAuthenticated,
} from "../../api/auth";

import { getUserInfoFromToken } from "../../localStorage";

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  const [userRoles, setUserRoles] = useState(() => {
    const storedUserRoles = localStorage.getItem("userRoles");
    return storedUserRoles ? JSON.parse(storedUserRoles) : [];
  });

  const updateUserRoles = async (roles) => {
    setUserRoles(roles);
  };

  const login = async () => {
    const userInfo = await getUserInfoFromToken();
    if (userInfo) {
      // await updateUserRoles(userInfo.roles);
      setUserRoles(userInfo.roles);
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    login();
  }, []);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userRoles, updateUserRoles, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
