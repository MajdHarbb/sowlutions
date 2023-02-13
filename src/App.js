import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/Home';
import Problem1 from './pages/Problems/Problem1';
import Problem2 from './pages/Problems/Problem2';
import Problem3 from './pages/Problems/Problem3';
import Problem4 from './pages/Problems/Problem4';
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem1" element={<Problem1 />} />
        <Route path="/problem2" element={<Problem2 />} />
        <Route path="/problem3" element={<Problem3 />} />
        <Route path="/problem4" element={<Problem4 />} />
        {/* <Route element={<ProtectedRoutes />}>
          <Route path="/product" element={<Product />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
