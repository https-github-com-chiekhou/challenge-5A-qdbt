import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ListMassageViewPage = lazy(() => import("./pages/ListMassage"));
const CompagnyViewPage = lazy(() => import("./pages/Compagny"));
const Register = lazy(() => import("./pages/Register"));
const Planning = lazy(() => import("./pages/Prestataire/Salarie/Planning"));
const PlanningSalarie = lazy(() =>
  import("./pages/Prestataire/Salarie/PlanningSalarie")
);
const DashboardSalaries = lazy(() =>
  import("./pages/Prestataire/Salarie/DashboardSalaries")
);
const AddEtablissementPrestations = lazy(() =>
  import("./pages/Prestataire/Etablissement/AddEtablissementPrestations")
);
const Admin = lazy(() => import("./pages/Admin"));
const DashboardUsers = lazy(() => import("./pages/Admin/DashboardUsers"));
const ProtectRoutes = lazy(() =>
  import("./components/ProtectRoutes/ProtectRoutes")
);
const UpdateUser = lazy(() => import("./pages/Admin/UpdateUser"));
const AddUser = lazy(() => import("./pages/Admin/AddUser"));
const ListEtablissement = lazy(() =>
  import("./pages/Prestataire/Etablissement/ListEtablissement")
);
const Etablissement = lazy(() =>
  import("./pages/Prestataire/Etablissement/Etablissement")
);
const Profil = lazy(() => import("./pages/Profil"));
const DayOff = lazy(() => import("./pages/Prestataire/Salarie/DayOff"));
const UpdateService = lazy(() =>
  import("./pages/Prestataire/Etablissement/UpdateService")
);
const DayOffSalarie = lazy(() =>
  import("./pages/Prestataire/Salarie/DayOffSalarie")
);
const UpdateDayOff = lazy(() =>
  import("./pages/Prestataire/Salarie/UpdateDayOff")
);
const UpdatePlanningSalarie = lazy(() =>
  import("./pages/Prestataire/Salarie/UpdatePlanningSalarie")
);
const Prestataire = lazy(() => import("./pages/Prestataire"));

const Loading = lazy(() => import("./components/Loading"));

const ProjectRoutes = () => {
  return (
    <React.Suspense
      fallback={
        <>
          <Loading />
        </>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/salons" element={<ListMassageViewPage />} />
          <Route path="/Compagny" element={<CompagnyViewPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/profil"
            element={
              <ProtectRoutes>
                <Profil />
              </ProtectRoutes>
            }
          />

          <Route
            path="/prestataire"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <Prestataire />
              </ProtectRoutes>
            }
          />

          <Route
            path="/prestataire/salarie/dayoff"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <DayOff />
              </ProtectRoutes>
            }
          />

          <Route
            path="/prestataire/salarie/dayoff/:id"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <DayOffSalarie />
              </ProtectRoutes>
            }
          />

          <Route
            path="/prestataire/salarie/update/dayoff/:id"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <UpdateDayOff />
              </ProtectRoutes>
            }
          />

          <Route
            path="/prestataire/salarie/planning"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <Planning />
              </ProtectRoutes>
            }
          />
          <Route
            path="/prestataire/planning-salarie/:id"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <PlanningSalarie />
              </ProtectRoutes>
            }
          />
          <Route
            path="/prestataire/planning-salarie/update/:id"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <UpdatePlanningSalarie />
              </ProtectRoutes>
            }
          />
          <Route
            path="/prestataire/salarie/list-salaries"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <DashboardSalaries />
              </ProtectRoutes>
            }
          />
          <Route
            path="/prestataire/etablissement"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <ListEtablissement />
              </ProtectRoutes>
            }
          />

          <Route
            path="/prestataire/etablissement/add"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <AddEtablissementPrestations />
              </ProtectRoutes>
            }
          />

          <Route
            path="/prestataire/etablissement/:id"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <Etablissement />
              </ProtectRoutes>
            }
          />

          <Route
            path="/prestataire/etablissement/update/service/:id"
            element={
              <ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                <UpdateService />
              </ProtectRoutes>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectRoutes requiredRoles={["ROLE_ADMIN"]}>
                <Admin />
              </ProtectRoutes>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectRoutes requiredRoles={["ROLE_ADMIN"]}>
                <DashboardUsers />
              </ProtectRoutes>
            }
          />
          <Route
            path="/admin/users/add"
            element={
              <ProtectRoutes requiredRoles={["ROLE_ADMIN"]}>
                <AddUser />
              </ProtectRoutes>
            }
          />
          <Route
            path="/admin/users/update/:id"
            element={
              <ProtectRoutes requiredRoles={["ROLE_ADMIN"]}>
                <UpdateUser />
              </ProtectRoutes>
            }
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
