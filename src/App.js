// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/dashboard" component={SupportDashboard} />
          <PrivateRoute path="/submit-ticket" component={TicketSubmissionForm} />
        
      </Router>
    </AuthProvider>
  );
};

export default App;
