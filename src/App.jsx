import ClientSettings from './pages/ClientSettings';
import Bookings from './pages/Bookings';

function App() {
  return (
    <div style={{padding: 24}}>
      <h1>Framtt Car Rental Dashboard (No Auth, Client ID in URL)</h1>
      <ClientSettings />
      <hr style={{margin: "32px 0"}} />
      <Bookings />
      <p>
        <i>
          To view a client’s dashboard, open:<br/>
          <code>?clientId=THECLIENTID</code> as a URL parameter.<br/>
          (Get clientId from your backend.)
        </i>
      </p>
    </div>
  );
}
export default App;
