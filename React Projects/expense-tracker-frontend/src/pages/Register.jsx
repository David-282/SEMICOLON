import { useState } from "react";
import { registerUser } from "../api/api";

export default function Register({ onRegister, goToLogin }) {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    initialBalance: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await registerUser({ ...form, initialBalance: parseFloat(form.initialBalance) });
      onRegister(form.email);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">💸</div>
          <h1>Create account</h1>
          <p>Start tracking your expenses</p>
        </div>

        {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="field">
            <label>Username</label>
            <input placeholder="johndoe" value={form.userName} onChange={set("userName")} required />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} required />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input placeholder="+234..." value={form.phoneNumber} onChange={set("phoneNumber")} required />
          </div>
          <div className="field">
            <label>Initial Balance (₦)</label>
            <input type="number" placeholder="50000" value={form.initialBalance} onChange={set("initialBalance")} required />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" value={form.password} onChange={set("password")} required />
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <span onClick={goToLogin}>Sign in</span>
        </p>
      </div>
    </div>
  );
}
