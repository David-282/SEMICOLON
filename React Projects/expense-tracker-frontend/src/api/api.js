const BASE_URL = "http://localhost:8080";

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.message || "Request failed");
  return json.data;
}

// ─── Users ───────────────────────────────────────────────
export const registerUser = (body) =>
  request("/api/users/register", { method: "POST", body: JSON.stringify(body) });

export const loginUser = (body) =>
  request("/api/users/login", { method: "POST", body: JSON.stringify(body) });

export const getUserProfile = (email) =>
  request(`/api/users/profile?email=${encodeURIComponent(email)}`);

export const topUpBalance = (email, amount) =>
  request(`/api/users/topup?email=${encodeURIComponent(email)}&amount=${amount}`, {
    method: "PUT",
  });

// ─── Expenses ─────────────────────────────────────────────
export const addExpense = (body) =>
  request("/api/expenses/add", { method: "POST", body: JSON.stringify(body) });

export const getAllExpenses = (userName) =>
  request(`/api/expenses/all?userName=${encodeURIComponent(userName)}`);

export const deleteExpense = (expenseId, userName) =>
  request(`/api/expenses/delete?expenseId=${expenseId}&userName=${encodeURIComponent(userName)}`, {
    method: "DELETE",
  });

export const updateExpense = (expenseId, userName, body) =>
  request(`/api/expenses/update?expenseId=${expenseId}&userName=${encodeURIComponent(userName)}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });

export const setExpensePaid = (expenseId, userName) =>
  request(`/api/expenses/pay?expenseId=${expenseId}&userName=${encodeURIComponent(userName)}`, {
    method: "PATCH",
  });

export const getTotalSpent = (userName) =>
  request(`/api/expenses/total-spent?userName=${encodeURIComponent(userName)}`);

export const getExpensesByCategory = (userName, category) =>
  request(`/api/expenses/by-category?userName=${encodeURIComponent(userName)}&category=${category}`);

export const getExpensesByStatus = (userName, status) =>
  request(`/api/expenses/by-status?userName=${encodeURIComponent(userName)}&status=${status}`);
