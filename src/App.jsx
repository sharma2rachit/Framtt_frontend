import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientSettings from './pages/ClientSettings';
import Bookings from './pages/Bookings';

function App() {
  const clientId = 'abc123'; // 🔁 Replace or fetch dynamically

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientSettings />} />
        <Route path="/bookings" element={<Bookings clientId={clientId} />} />
      </Routes>
    </Router>
  );
}

export default App;
