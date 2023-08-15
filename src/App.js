
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import HomePage from './HomePage';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time (you can replace this with your actual loading logic)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating 3 seconds of loading time
  }, []);

  return (
    <Routes>
      {/* The loading page route */}
      <Route path="/" element={loading ? <LoadingPage /> : <HomePage />} />

      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default App;

    