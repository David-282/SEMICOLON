import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");

  const handleLogin = (email) => {
    setEmail(email);
    setPage("dashboard");
  };

  const handleRegister = (email) => {
    setEmail(email);
    setPage("dashboard");
  };

  const handleLogout = () => {
    setEmail("");
    setPage("login");
  };

  if (page === "dashboard") return <Dashboard email={email} onLogout={handleLogout} />;
  if (page === "register") return <Register onRegister={handleRegister} goToLogin={() => setPage("login")} />;
  return <Login onLogin={handleLogin} goToRegister={() => setPage("register")} />;
}
