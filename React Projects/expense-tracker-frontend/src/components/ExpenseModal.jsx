import { useState, useEffect } from "react";

const CATEGORIES = ["FOOD", "TRANSPORT", "BILLS", "HEALTH", "ENTERTAINMENT", "RENT", "SAVING", "INVESTMENT", "OTHER"];
const STATUSES = ["UNPAID", "PAID"];

export default function ExpenseModal({ userEmail, expense, onSave, onClose }) {
  const [form, setForm] = useState({
    expenseName: "",
    amount: "",
    category: "FOOD",
    status: "UNPAID",
    userEmail: userEmail,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (expense) {
      setForm({
        expenseName: expense.name,
        amount: expense.amount,
        category: expense.category,
        status: expense.status,
        userEmail: userEmail,
      });
    }
  }, [expense]);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.expenseName.trim()) {
      setError("Expense name is required");
      return;
    }
    if (!form.amount || parseFloat(form.amount) <= 0) {
      setError("Amount must be greater than zero");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await onSave({ ...form, amount: parseFloat(form.amount) });
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{expense ? "Edit Expense" : "Add Expense"}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="field">
            <label>Expense Name</label>
            <input placeholder="e.g. Electricity bill" value={form.expenseName} onChange={set("expenseName")} required />
          </div>
          <div className="field">
            <label>Amount (₦)</label>
            <input type="number" placeholder="0.00" value={form.amount} onChange={set("amount")} required />
          </div>
          <div className="field">
            <label>Category</label>
            <select value={form.category} onChange={set("category")}>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="field">
            <label>Status</label>
            <select value={form.status} onChange={set("status")}>
              {STATUSES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Saving..." : expense ? "Update" : "Add Expense"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
