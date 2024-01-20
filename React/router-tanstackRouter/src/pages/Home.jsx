import { useState } from "react";
import { Navigate } from "react-router-dom";

function Home() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>HOMEPAGE</h1>
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      {num == 1 && <Navigate to="/about" replace={true} />}
    </div>
  );
}

export default Home;
