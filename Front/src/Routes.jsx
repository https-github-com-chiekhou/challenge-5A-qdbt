import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import ListMassageViewPage from "./pages/ListMassage";
import Map from "./pages/Map/Map";
//const Error = React.lazy(() => import("pages/Error"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/salons" element={<ListMassageViewPage />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router> 
    </React.Suspense>
  );
};
export default ProjectRoutes;