import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./Context/Authprovider.jsx";
import { Toaster } from "react-hot-toast";
import { SearchProvider } from "./Context/SearchContext.jsx";
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <SearchProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </SearchProvider>
  </AuthProvider>,
);
