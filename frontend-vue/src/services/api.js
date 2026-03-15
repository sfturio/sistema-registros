const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data?.error || "request_failed");
  }

  return data;
}

export const api = {
  list(params = {}) {
    const search = new URLSearchParams(params);
    return request(`/registros${search.toString() ? `?${search.toString()}` : ""}`);
  },
  create(payload) {
    return request("/registros", { method: "POST", body: JSON.stringify(payload) });
  },
  update(id, payload) {
    return request(`/registros/${id}`, { method: "PUT", body: JSON.stringify(payload) });
  },
  remove(id) {
    return request(`/registros/${id}`, { method: "DELETE" });
  },
};
