import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/Auth/PrivateRoute';
import Login from './components/Auth/Login';
import SupportDashboard from './components/Dashboard/SupportDashboard';
import TicketSubmissionForm from './components/TicketForm/TicketSubmissionForm';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Sidebar />
        
        <Routes>
          {/* Route for login */}
          <Route path="/login" element={<Login />} />
          
          {/* Private routes wrapped with PrivateRoute */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<SupportDashboard />} />
            <Route path="/submit-ticket" element={<TicketSubmissionForm />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

