import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes.jsx";
import "./index.css";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import Header1 from "./components/Header1/index.jsx";
import Footer from "./components/Footer/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Header1 />
      <Routes />
      <Footer />
    </AuthProvider>
  </React.StrictMode>
);
