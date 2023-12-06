import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import type { User } from "types";

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthCotnextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (email: string, password: string) => {
    if (email === "nikolauswang44@gmail.com" && password === "password") {
      const token = "4|n4mqLOi0NTMIus5IeCYd87aWTg9q4Xjz1wd9byJ40d00e861";

      const newUser: User = {
        id: 1,
        name: "Nikolaus Wang",
        email: "nikolauswang44@gmail.com",
      };

      setUser(newUser);
      setIsAuthenticated(true);

      localStorage.setItem("token", token);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);

    localStorage.removeItem("token");
  };

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
