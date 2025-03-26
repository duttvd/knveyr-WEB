import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-1jp0nfscxh5isrre.us.auth0.com"
      clientId="dkl2s0CqbG0ZLJcuYzbXjbPHWopUEkGE"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <ThemeProvider>
        <AppWrapper>
          <App />
        </AppWrapper>
      </ThemeProvider>
    </Auth0Provider>
  </StrictMode>
);
