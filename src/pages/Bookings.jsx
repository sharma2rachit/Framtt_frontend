import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

function getClientIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("clientId") || "";
}

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const clientId = getClientIdFromURL();

  useEffect(() => {
    if (!clientId) return;
    async function fetchBookings() {
      const { data } = await supabase
        .from("bookings")
        .select("*")
        .eq("client_id", clientId);
      setBookings(data || []);
    }
    fetchBookings();
  }, [clientId]);

  return (
    <div>
      <h2>Bookings</h2>
      <p><b>For Client ID:</b> {clientId || "Not set"}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Vehicle</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b.id}>
              <td>{b.name}</td>
              <td>{b.phone}</td>
              <td>{b.vehicle}</td>
              <td>{b.start_date}</td>
              <td>{b.end_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Bookings;
