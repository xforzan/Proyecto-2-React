import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const { login, registerUser, error, loading} = useContext(AuthContext);

  const [isRegistering, setIsRegistering] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

    if (loading) return <p>Cargando...</p>;

  const onSubmit = async (data) => {
    try {

      if (isRegistering) {
        await registerUser(data)
      }

      await login(data);

      navigate("/account");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <h2>{isRegistering ? "Registro" : "Login"}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {isRegistering && (
          <>
            <input type="text" placeholder="Nombre" {...register("name", { required: true })} />
            { errors.name && <p>Nombre requerido</p>}
          </>
        )}

        <input type="email" placeholder="Correo" {...register("email", { required: true })}/>
        {errors.email && <p>Email requerido</p>}


        <input type="password" placeholder="Contraseña" {...register("password", { required: true })}/>
        {errors.password && <p>Contraseña requerida</p>}

        {isRegistering && (
          <>
            <input type="password" placeholder="Confirmar contraseña"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden",
              })}
            />
            {errors.confirmPassword && (<p>{errors.confirmPassword.message}</p>)}
          </>
        )}

      {error && <p className="error">{error}</p>}

        <button type="submit">{isRegistering ? "Registrarse" : "Entrar"}</button>
      </form>

      <p onClick={() => setIsRegistering(!isRegistering)}>{isRegistering? "¿Ya tienes cuenta? Login": "¿No tienes cuenta? Registrarse"}</p>
    </div>
  );
};

export default Auth;
