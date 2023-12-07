import React, { useState, useEffect, createContext, useContext } from "react";
import type { User } from "types";
import api from "utils/axios";

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  getUser: () => Promise<boolean>;
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
  isLoading: false,
  setIsLoading: async () => {},
  login: async () => false,
  logout: async () => false,
  getUser: async () => false,
  register: async () => false,
});

export const AuthCotnextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const res = await api.post("/login", {
        email,
        password,
      });
      const { user, accessToken, status } = res.data;
      setIsLoading(false);
      if (status === 200) {
        const newUser: User = user;

        setUser(newUser);
        setIsAuthenticated(true);

        localStorage.setItem("token", accessToken);
        return true;
      }
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }

    return false;
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    passwordConrim: string
  ) => {
    try {
      setIsLoading(true);
      const res = await api.post("/register", {
        name,
        email,
        password,
        password_confirmation: passwordConrim,
      });
      setIsLoading(false);
      const { user, accessToken, status } = res.data;

      if (status === 200) {
        const newUser: User = user;

        setUser(newUser);
        setIsAuthenticated(true);

        localStorage.setItem("token", accessToken);
        return true;
      }
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }

    return false;
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      const res = await api.post("/logout");
      setIsLoading(false);
      const { status } = res.data;

      if (status === 204) {
        setUser(null);
        setIsAuthenticated(false);

        localStorage.removeItem("token");
        return true;
      }
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }

    return false;
  };

  const getUser = async () => {
    try {
      const res = await api.get("/user");
      const { status } = res.data;
      if (status === 200) {
        const newUser: User = res.data.user;

        setUser(newUser);
        setIsAuthenticated(true);

        return true;
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  };

  useEffect(() => {
    (async () => await getUser())();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        setIsLoading,
        login,
        logout,
        register,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
