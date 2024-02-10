import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register"
import Reservation from "./pages/Reservation.jsx";
import ListePrestataire from "./pages/ListePrestataire.jsx";
//const Error = React.lazy(() => import("pages/Error"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/register" element={<Register />} />
          <Route path="/liste-prestataire" element={<ListePrestataire />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;