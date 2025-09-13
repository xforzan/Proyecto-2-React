import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/users/me", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) console.error("No autenticado");
        console.log("hola")

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Error al cargar usuario:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    await fetch("http://localhost:3000/api/v1/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  };

  const setAvatar = (avatar) => {
    setUser({
    ...user,
    avatar
  });
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, setAvatar }}>
      {children}
    </AuthContext.Provider>
  );
};
