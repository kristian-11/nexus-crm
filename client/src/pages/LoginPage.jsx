import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function validateForm() {
    if (email === "" || password === "") {
      setErrorMessage("Todos los campos son obligatorios.");
      return false;
    }

    if (password.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }

    setErrorMessage("");
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      navigate("/dashboard");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Correo electrónico</label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      {errorMessage && <p>{errorMessage}</p>}

      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginPage;
