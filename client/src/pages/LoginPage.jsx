import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
 

  function validateForm() {
    if (email === "" || password === "") {
      setErrorMessage("Todos los campos son obligatorios.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Ingresa un correo electrónico válido.");
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
      onLogin(true);
      navigate("/dashboard");
    }
  }

  return (
    <main className="login-container">

      <h1>Iniciar sesión</h1>

      {errorMessage && (
        <div className="auth-alert" role="alert">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="form-group">
          <Link to="/reset-password" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <button type="submit" className="btn-submit">Iniciar sesión</button>
      </form>
    </main>
  );
}

export default LoginPage;
