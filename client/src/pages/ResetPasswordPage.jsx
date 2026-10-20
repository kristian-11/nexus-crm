import { Link } from "react-router-dom";
import "./ResetPasswordPage.css";

function ResetPasswordPage() {
  return (
    <main className="reset-container">
      <h1>Restablecer contraseña</h1>
      <p>Esta función estará disponible pronto. Estamos trabajando para ti.</p>

      <Link to="/" className="reset-submit">
        Volver al inicio de sesión
      </Link>
    </main>
  );
}

export default ResetPasswordPage;