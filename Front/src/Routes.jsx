import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ListMassageViewPage from "./pages/ListMassage";
import Register from "./pages/Register";
import Planning from "./pages/Prestataire/Salarie/Planning";
import PlanningSalarie from "./pages/Prestataire/Salarie/PlanningSalarie";
import DashboardSalaries from "./pages/Prestataire/Salarie/DashboardSalaries";
import AddEtablissementPrestations from "./pages/Prestataire/Etablissement/AddEtablissementPrestations";
import Admin from "./pages/Admin";
import DashboardUsers from "./pages/Admin/DashboardUsers";
import ProtectRoutes from "./components/ProtectRoutes/ProtectRoutes";
import UpdateUser from "./pages/Admin/UpdateUser";
import AddUser from "./pages/Admin/AddUser";
import ListEtablissement from "./pages/Prestataire/Etablissement/ListEtablissement";
import Etablissement from "./pages/Prestataire/Etablissement/Etablissement";
import Profil from "./pages/Profil";
import DayOff from "./pages/Prestataire/Salarie/DayOff";
import UpdateService from "./pages/Prestataire/Etablissement/UpdateService";
import DayOffSalarie from "./pages/Prestataire/Salarie/DayOffSalarie";
import UpdateDayOff from "./pages/Prestataire/Salarie/UpdateDayOff";
import UpdatePlanningSalarie from "./pages/Prestataire/Salarie/UpdatePlanningSalarie";
import Prestataire from "./pages/Prestataire";
import MakeReservation from "./pages/MakeReservation.jsx";

const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ListMassageViewPage = lazy(() => import("./pages/Massages/massages"));
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
import Map from "./pages/Map/Map";
//const Error = React.lazy(() => import("pages/Error"));
const ProjectRoutes = () => {
    return (<React.Suspense fallback={<>Loading...</>}>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/salons" element={<ListMassageViewPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>

                    <Route
                        path="/profil"
                        element={<ProtectRoutes>
                            <Profil/>
                        </ProtectRoutes>}
                    />

                    <Route
                        path="/prestataire"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <Prestataire/>
                        </ProtectRoutes>}
                    />

                    <Route
                        path="/prestataire/salarie/dayoff"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <DayOff/>
                        </ProtectRoutes>}
                    />

                    <Route
                        path="/prestataire/salarie/dayoff/:id"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <DayOffSalarie/>
                        </ProtectRoutes>}
                    />

                    <Route
                        path="/prestataire/salarie/update/dayoff/:id"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <UpdateDayOff/>
                        </ProtectRoutes>}
                    />

                    <Route
                        path="/prestataire/salarie/planning"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <Planning/>
                        </ProtectRoutes>}
                    />
                    <Route
                        path="/prestataire/planning-salarie/:id"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <PlanningSalarie/>
                        </ProtectRoutes>}
                    />
                    <Route
                        path="/prestataire/planning-salarie/update/:id"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <UpdatePlanningSalarie/>
                        </ProtectRoutes>}
                    />
                    <Route
                        path="/prestataire/salarie/list-salaries"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <DashboardSalaries/>
                        </ProtectRoutes>}
                    />
                    <Route
                        path="/prestataire/etablissement"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <ListEtablissement/>
                        </ProtectRoutes>}
                    />

                    <Route
                        path="/prestataire/etablissement/add"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <AddEtablissementPrestations/>
                        </ProtectRoutes>}
                    />

                    <Route
                        path="/prestataire/etablissement/:id"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <Etablissement/>
                        </ProtectRoutes>}
                    />

                    <Route
                        path="/prestataire/etablissement/update/service/:id"
                        element={<ProtectRoutes requiredRoles={["ROLE_PRESTATAIRE"]}>
                            <UpdateService/>
                        </ProtectRoutes>}
                    />
                    <Route
                        path="/admin"
                        element={<ProtectRoutes requiredRoles={["ROLE_ADMIN"]}>
                            <Admin/>
                        </ProtectRoutes>}
                    />
                    <Route
                        path="/admin/dashboard"
                        element={<ProtectRoutes requiredRoles={["ROLE_ADMIN"]}>
                            <DashboardUsers/>
                        </ProtectRoutes>}
                    />
                    <Route
                        path="/admin/users/add"
                        element={<ProtectRoutes requiredRoles={["ROLE_ADMIN"]}>
                            <AddUser/>
                        </ProtectRoutes>}
                    />
                    <Route
                        path="/admin/users/update/:id"
                        element={<ProtectRoutes requiredRoles={["ROLE_ADMIN"]}>
                            <UpdateUser/>
                        </ProtectRoutes>}
                    />
                    <Route
                        path='/make-reservation'
                        element={<MakeReservation/>}
                    />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
