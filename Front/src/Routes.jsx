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
                </Routes>

            </Router>
        </React.Suspense>);
};
export default ProjectRoutes;
