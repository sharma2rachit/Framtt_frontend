import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const Bookings = ({ clientId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('client_id', clientId);

      if (data) setBookings(data);
    }
    if (clientId) fetchBookings();
  }, [clientId]);

  return (
    <div>
      <h2>Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Phone</th><th>Vehicle</th><th>Start Date</th><th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.name}</td><td>{b.phone}</td><td>{b.vehicle}</td>
              <td>{b.start_date}</td><td>{b.end_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
