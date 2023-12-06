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
import User from "./pages/User"
import Admin from "./pages/Admin"
import GestionAdherents from "./pages/GestionAdherents.jsx"
//const Error = React.lazy(() => import("pages/Error"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/salons" element={<ListMassageViewPage />} />
          <Route path="/login" element={<Login />} />
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
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
