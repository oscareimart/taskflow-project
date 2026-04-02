import { Suspense, lazy } from "react";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <main>
      <Login />
      <Register />
      <Suspense fallback={<h2> Cargando... </h2>}>
        <Dashboard />
      </Suspense>
    </main>
  );
}

export default App;
