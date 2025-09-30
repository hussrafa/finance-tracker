import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5175/health")
      .then((res) => res.text())
      .then(setStatus)
      .catch(() => setStatus("API not reachable"));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>FinanceTracker</h1>
      <p>API Health: {status}</p>
    </div>
  );
}

export default App;
