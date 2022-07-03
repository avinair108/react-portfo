import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignInPage from './pages/signin'
import Home from './pages';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} exact /> 
      <Route path="/signin" element={<SignInPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
