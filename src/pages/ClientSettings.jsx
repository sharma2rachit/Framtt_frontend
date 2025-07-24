import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient'; // adjust path if needed

const ClientSettings = () => {
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    async function fetchClientData() {
      const email = "client@example.com"; // 🔄 Replace with actual logic
      const { data } = await supabase
        .from("clients")
        .select("client_id")
        .eq("email", email)
        .single();

      if (data) setClientId(data.client_id);
    }
    fetchClientData();
  }, []);

  const snippet = `<script src="https://framtt-backend.onrender.com/snippet/${clientId}.js"></script>`;

  return (
    <div>
      <h2>Your Integration Snippet</h2>
      {clientId ? <textarea rows={5} cols={70} value={snippet} readOnly /> : <p>Loading snippet…</p>}
    </div>
  );
};

export default ClientSettings;
