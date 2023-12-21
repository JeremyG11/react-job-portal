import React from 'react';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Navigation from './Components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Jobs from './Pages/Jobs';
import { getToken } from './config/localStorage';
import { useEffect } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';

function App() {
  useEffect(() => {
    getToken();
  }, []);
  return (
    <div className="relative w-100 h-100 bg-transparent">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
