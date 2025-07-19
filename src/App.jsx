import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PatientDashboard from "./frontend/PatientDashboard";
import BookAppointment from "./frontend/BookAppointment";
import EventsPage from "./frontend/EventsPage";
import Doctor from "./frontend/doctor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientDashboard />} />
        <Route path="/appointment" element={<BookAppointment />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/nearby-doctors" element={<Doctor />} /> {/* Added this */}
      </Routes>
    </Router>
  );
}

export default App;
