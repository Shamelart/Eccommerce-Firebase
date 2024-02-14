import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ContainCard from "./components/ContainCard";
import Footer from "./components/Footer";
import DateilCard from "./components/DetailCard";
import CartContexProvider from "./contex/CartContex";
import CartDetailContainer from "./components/cart/CartDetailContainer";
import { Toaster } from "sonner";
import './App.css'
//Autenticacion
import { Auth0Provider } from "@auth0/auth0-react";

//proteccion
import AuthGuard from "./components/AuthGuard";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <CartContexProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/:nameCategory"
                element={
                  <AuthGuard>
                    <ContainCard />
                  </AuthGuard>
                }
              />
              <Route
                path="/:nameCategory/:id"
                element={
                  <AuthGuard>
                    <DateilCard />
                  </AuthGuard>
                }
              />
              <Route
                path="/cart"
                element={
                  <AuthGuard>
                    <CartDetailContainer />
                  </AuthGuard>
                }
              />
            </Routes>
            <Footer />
          </CartContexProvider>
        </Auth0Provider>
      </BrowserRouter>
      <Toaster position="top-center" />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
