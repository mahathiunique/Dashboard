import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AdminPanel from "./frontend/AdminPanel.jsx";
import DoctorDashboard from "./frontend/DoctorDashboard.jsx";
import HospitalDashboard from "./frontend/HospitalDashboard.jsx";
import PharmacyDashboard from "./frontend/PharmacyDashboard.jsx";
import NGODashboard from "./frontend/NGODashboard.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route will redirect to Admin panel */}
        <Route path="/" element={<Navigate to="/admin" />} />

        {/* Dashboard routes */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/hospital" element={<HospitalDashboard />} />
        <Route path="/pharmacy" element={<PharmacyDashboard />} />
        <Route path="/ngo" element={<NGODashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
