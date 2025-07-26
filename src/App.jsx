import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Redirect / to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        {/* Optionally, a catch-all "not found" page: */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
