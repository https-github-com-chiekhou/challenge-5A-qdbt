import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ListMassageViewPage from "./pages/ListMassage";
import Register from "./pages/Register";
import Planning from "./pages/Prestataire/Planning";
import PlanningSalarie from "./pages/Prestataire/PlanningSalarie";
import DashboardSalaries from "./pages/Prestataire/DashboardSalaries";
import Reservation from "./pages/Reservation.jsx";
import User from "./pages/User"
import Admin from "./pages/Admin"
import GestionAdherents from "./pages/gestionAdherents.jsx"
//const Error = React.lazy(() => import("pages/Error"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/salons" element={<ListMassageViewPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/register" element={<Register />} />
          <Route path="/prestataire/planning" element={<Planning />} />
          <Route
            path="/prestataire/planning-salarie/:id"
            element={<PlanningSalarie />}
          />
          <Route
            path="/prestataire/dashboard-salaries"
            element={<DashboardSalaries />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/:id" element={<GestionAdherents />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
