const API_URL = "http://localhost:3000";

export async function healthCheck() {
  const response = await fetch(`${API_URL}/health`);
  return response.json();
}
