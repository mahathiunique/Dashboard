// DoctorDashboard.jsx
import React from 'react';
import './DoctorDashboard.css';

function DoctorDashboard() {
  return (
    <div className="doctor-dashboard">
      <header>
        <h1>Doctor Dashboard</h1>
        <p>Welcome back, Doctor. Here's what's happening today.</p>
      </header>

      <section className="dashboard-section">
        <div className="dashboard-card">
          <h3>Today's Appointments</h3>
          <ul>
            <li>Patient: Ramesh | 10:30 AM</li>
            <li>Patient: Priya | 11:00 AM</li>
            <li>Patient: Karthik | 12:15 PM</li>
          </ul>
        </div>

        <div className="dashboard-card">
          <h3>Prescriptions Issued</h3>
          <p>Today: 12</p>
          <button>View All</button>
        </div>

        <div className="dashboard-card">
          <h3>Donation Recommendations</h3>
          <p>AI suggested 4 medicines for donation today.</p>
          <button>View Suggestions</button>
        </div>

        <div className="dashboard-card">
          <h3>Inventory Alerts</h3>
          <p>3 items expiring this month.</p>
          <button>Manage Inventory</button>
        </div>

        <div className="dashboard-card">
          <h3>Donation History</h3>
          <button>View Past Donations</button>
        </div>

        <div className="dashboard-card">
          <h3>Flagged Issues by AI</h3>
          <p>2 unusual prescription patterns flagged today.</p>
          <button>Review</button>
        </div>
      </section>

      <div className="chatbot-icon">💬</div>
    </div>
  );
}

export default DoctorDashboard;