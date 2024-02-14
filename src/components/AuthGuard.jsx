import { useAuth0 } from "@auth0/auth0-react";

const AuthGuard = ({ children }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    // El usuario no está autenticado, puedes redirigirlo a la página de inicio de sesión o mostrar un mensaje.
    history.replaceState({}, "", "/");
    return loginWithRedirect();
  }

  // El usuario está autenticado, permite el acceso a las rutas protegidas.
  return children;
};

export default AuthGuard;
