import React, { Suspense, lazy } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <div>
      <Login />
      <Register />
      <Suspense fallback={<h2> Cargando... </h2>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
