import React, { useState, useEffect, createContext, useContext } from "react";
import type { User } from "types";
import api from "utils/axios";

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  register: (
    name: string,
    email: string,
    password: string,
    passworcdConfirm: string
  ) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  logout: async () => false,
  register: async () => false,
});

export const AuthCotnextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const login = async (email: string, password: string) => {
    const res = await api.post("/login", {
      email,
      password,
    });
    const { user, accessToken, status } = res.data;

    if (status === 200) {
      const newUser: User = user;

      setUser(newUser);
      setIsAuthenticated(true);

      localStorage.setItem("token", accessToken);
      return true;
    }

    return false;
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    passwordConrim: string
  ) => {
    const res = await api.post("/register", {
      name,
      email,
      password,
      password_confirmation: passwordConrim,
    });
    const { user, accessToken, status } = res.data;

    if (status === 200) {
      const newUser: User = user;

      setUser(newUser);
      setIsAuthenticated(true);

      localStorage.setItem("token", accessToken);
      return true;
    }

    return false;
  };

  const logout = async () => {
    const res = await api.post("/logout");
    const { status } = res.data;

    if (status === 204) {
      setUser(null);
      setIsAuthenticated(false);

      localStorage.removeItem("token");
      return true;
    }

    return false;
  };

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
