import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RepositoryPage from './RepositoryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/repository" element={<RepositoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
