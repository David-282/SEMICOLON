import { useState, useEffect, useCallback } from "react";
import {
  getAllExpenses, deleteExpense, setExpensePaid,
  getTotalSpent, getUserProfile, addExpense, updateExpense,
  getExpensesByCategory, getExpensesByStatus, topUpBalance,
} from "../api/api";
import ExpenseModal from "../components/ExpenseModal";

const CATEGORY_COLORS = {
  FOOD: "#f97316", TRANSPORT: "#3b82f6", BILLS: "#ef4444",
  HEALTH: "#10b981", ENTERTAINMENT: "#a855f7", RENT: "#f59e0b",
  SAVING: "#06b6d4", INVESTMENT: "#84cc16", OTHER: "#6b7280",
};

const fmt = (n) => `₦${Number(n || 0).toLocaleString("en-NG", { minimumFractionDigits: 2 })}`;

export default function Dashboard({ email, onLogout }) {
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [topupAmount, setTopupAmount] = useState("");
  const [showTopup, setShowTopup] = useState(false);
  const [error, setError] = useState("");

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const profile = await getUserProfile(email);
      setUser(profile);

      let exp;
      if (filterCategory) {
        exp = await getExpensesByCategory(profile.userName, filterCategory);
      } else if (filterStatus) {
        exp = await getExpensesByStatus(profile.userName, filterStatus);
      } else {
        exp = await getAllExpenses(profile.userName);
      }
      setExpenses(exp || []);

      const ts = await getTotalSpent(profile.userName);
      setTotalSpent(ts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [email, filterCategory, filterStatus]);

  useEffect(() => { loadData(); }, [loadData]);

  const handleAddExpense = async (form) => {
    await addExpense({ ...form, userEmail: email });
    await loadData();
  };

  const handleUpdateExpense = async (form) => {
    await updateExpense(editingExpense.id, user.userName, form);
    await loadData();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this expense?")) return;
    await deleteExpense(id, user.userName);
    await loadData();
  };

  const handlePay = async (id) => {
    await setExpensePaid(id, user.userName);
    await loadData();
  };

  const handleTopup = async (e) => {
    e.preventDefault();
    try {
      await topUpBalance(email, parseFloat(topupAmount));
      setTopupAmount("");
      setShowTopup(false);
      await loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  const clearFilters = () => { setFilterCategory(""); setFilterStatus(""); };

  const CATEGORIES = ["FOOD","TRANSPORT","BILLS","HEALTH","ENTERTAINMENT","RENT","SAVING","INVESTMENT","OTHER"];

  if (loading) return <div className="loading-screen"><div className="spinner" /><p>Loading your finances...</p></div>;

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">💸 ExpenseTracker</div>

        <div className="user-card">
          <div className="avatar">{user?.userName?.[0]?.toUpperCase()}</div>
          <div>
            <p className="user-name">{user?.userName}</p>
            <p className="user-email">{user?.email}</p>
          </div>
        </div>

        <div className="balance-card">
          <p className="balance-label">Current Balance</p>
          <p className="balance-amount">{fmt(user?.currentBalance)}</p>
          {showTopup ? (
            <form onSubmit={handleTopup} className="topup-form">
              <input
                type="number"
                placeholder="Amount"
                value={topupAmount}
                onChange={(e) => setTopupAmount(e.target.value)}
                required
              />
              <div className="topup-actions">
                <button type="submit" className="btn-small-primary">Top Up</button>
                <button type="button" className="btn-small-secondary" onClick={() => setShowTopup(false)}>Cancel</button>
              </div>
            </form>
          ) : (
            <button className="btn-topup" onClick={() => setShowTopup(true)}>+ Top Up</button>
          )}
        </div>

        <nav className="sidebar-nav">
          <p className="nav-label">Filter by Category</p>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`nav-item ${filterCategory === c ? "active" : ""}`}
              onClick={() => { setFilterCategory(c); setFilterStatus(""); }}
            >
              <span className="cat-dot" style={{ background: CATEGORY_COLORS[c] }} />
              {c}
            </button>
          ))}
          <p className="nav-label" style={{ marginTop: "1rem" }}>Filter by Status</p>
          {["PAID", "UNPAID"].map((s) => (
            <button
              key={s}
              className={`nav-item ${filterStatus === s ? "active" : ""}`}
              onClick={() => { setFilterStatus(s); setFilterCategory(""); }}
            >
              <span className={`status-dot ${s.toLowerCase()}`} />
              {s}
            </button>
          ))}
          {(filterCategory || filterStatus) && (
            <button className="nav-item clear" onClick={clearFilters}>✕ Clear filter</button>
          )}
        </nav>

        <button className="logout-btn" onClick={onLogout}>Sign out</button>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <div className="top-bar">
          <div>
            <h1>Your Expenses</h1>
            <p className="sub">
              {filterCategory && `Filtered by ${filterCategory}`}
              {filterStatus && `Filtered by ${filterStatus}`}
              {!filterCategory && !filterStatus && `${expenses.length} total expenses`}
            </p>
          </div>
          <button className="btn-primary" onClick={() => { setEditingExpense(null); setShowModal(true); }}>
            + Add Expense
          </button>
        </div>

        {error && <div className="error-banner">{error}</div>}

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-card">
            <p className="stat-label">Total Spent</p>
            <p className="stat-value red">{fmt(totalSpent)}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Unpaid</p>
            <p className="stat-value yellow">{expenses.filter((e) => e.status === "UNPAID").length} expenses</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Paid</p>
            <p className="stat-value green">{expenses.filter((e) => e.status === "PAID").length} expenses</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Initial Balance</p>
            <p className="stat-value">{fmt(user?.initialBalance)}</p>
          </div>
        </div>

        {/* Expense list */}
        {expenses.length === 0 ? (
          <div className="empty-state">
            <p>🧾</p>
            <p>No expenses found. Add your first one!</p>
          </div>
        ) : (
          <div className="expense-list">
            {expenses.map((exp) => (
              <div key={exp.id} className="expense-row">
                <div className="expense-cat-badge" style={{ background: CATEGORY_COLORS[exp.category] + "22", color: CATEGORY_COLORS[exp.category] }}>
                  {exp.category}
                </div>
                <div className="expense-info">
                  <p className="expense-name">{exp.name}</p>
                  <p className="expense-date">{new Date(exp.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
                </div>
                <div className="expense-amount">{fmt(exp.amount)}</div>
                <div className={`expense-status ${exp.status.toLowerCase()}`}>{exp.status}</div>
                <div className="expense-actions">
                  {exp.status === "UNPAID" && (
                    <button className="action-btn pay" onClick={() => handlePay(exp.id)} title="Mark as Paid">✓</button>
                  )}
                  <button className="action-btn edit" onClick={() => { setEditingExpense(exp); setShowModal(true); }} title="Edit">✎</button>
                  <button className="action-btn delete" onClick={() => handleDelete(exp.id)} title="Delete">✕</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {showModal && (
        <ExpenseModal
          userEmail={email}
          expense={editingExpense}
          onSave={editingExpense ? handleUpdateExpense : handleAddExpense}
          onClose={() => { setShowModal(false); setEditingExpense(null); }}
        />
      )}
    </div>
  );
}
