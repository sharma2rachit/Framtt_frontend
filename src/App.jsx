// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Optional: add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
