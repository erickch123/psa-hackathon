import React from 'react';
import { Route, Routes, Navigate } from "react-router";
import Home from "./pages/Home";
import Prereq from "./pages/PrereqEntry";
import Workplace from "./pages/Workplace";
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <div>
      <Navbar/>
 <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Prereq" element={<Prereq />} />
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/atworkplace" element={<Workplace />} />
      <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
    </Routes>
    </div>
   
  );
}
export default App;
