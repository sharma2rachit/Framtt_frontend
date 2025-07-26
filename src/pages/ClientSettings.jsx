import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

function getClientIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("clientId") || "";
}

const ClientSettings = () => {
  const [client, setClient] = useState(null);
  const [error, setError] = useState('');
  const clientId = getClientIdFromURL();

  useEffect(() => {
    if (!clientId) return;
    async function fetchClient() {
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .eq("client_id", clientId)
        .single();
      if (data) setClient(data);
      if (error) setError(error.message);
    }
    fetchClient();
  }, [clientId]);

  const snippet = clientId
    ? `<script src="https://framtt-backend.onrender.com/snippet/${clientId}.js"></script>`
    : '';

  return (
    <div>
      <h2>Your Integration Snippet</h2>
      <p><b>Your Client ID:</b> {clientId || "Not found (check URL)"}</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {client ? (
        <textarea rows={3} cols={70} value={snippet} readOnly />
      ) : !error && <p>Loading snippet…</p>}
    </div>
  );
};
export default ClientSettings;
