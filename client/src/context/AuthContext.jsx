import { set } from "mongoose";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError ] = useState(null)

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

  const login = async (data) => {
    setError(null)
    setLoading(true)
    const { email, password } = data;
    try{
      const resLogin = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (resLogin.status !== 200) {
        const err = await resLogin.json();
        setError(err.message || "Error en el login");
        return;
      }

      const jsonLogin = await resLogin.json();
    setUser(jsonLogin.user);

    }catch (error){
      console.error("Ha habido un problema al iniciar sesion")
    }finally{
      setLoading(false)
    }
  };

  const registerUser = async(data) =>{
    setError(null)
    setLoading(true)
    try{
      const { confirmPassword, ...sendData } = data
      const resRegister = await fetch(
          "http://localhost:3000/api/v1/auth/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sendData),
            credentials: "include",
          }
        );

        if (resRegister.status !== 201) {
          const err = await resRegister.json();
          setError(err.message || "Error en el registro");
          return;
        }

        console.log("Cuenta creada satisfactoriamente");
        console.log(await resRegister.json())

    }catch (error){
      console.error("Ha habido un problema al registrarse")
    }finally{
      setLoading(false)
    }
  }

  const logout = async () => {
    await fetch("http://localhost:3000/api/v1/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
  };

  const deleteUser = async () =>{
    try{
      setLoading(true)
      const data = await fetch("http://localhost:3000/api/v1/users/me", {
      method: "DELETE",
      credentials: "include",
    });
    const result = await data.json()
    console.log(result)
    }catch (error){
      console.error("Ha habido un problema al eliminar el usuario.",error)
    }
    finally{
      setLoading(false)
    }
  }

  const setAvatar = (avatar) => {
    setUser({
    ...user,
    avatar
  });
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, registerUser,  logout, setAvatar, deleteUser, error }}>
      {children}
    </AuthContext.Provider>
  );
};
