import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthForm from './Components/Authh';
import Dashboard from './Components/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <AuthForm isLogin={true} onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<AuthForm isLogin={false} onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
