const BASE_URL = 'http://localhost:5000/api/v1';

export async function loginAdmin(credentials: { email: string; password: string }) {
  const response = await fetch(`${BASE_URL}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  
  if (!response.ok) {
    throw new Error('Login failed');
  }
  
  return response.json();
}

export async function fetchUsers() {
  const response = await fetch(`${BASE_URL}/user-requests`);
  const data = await response.json();
  return data.data;
}

export async function fetchAllUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data.data;
}

export async function fetchUserDetails(id: string) {
  const response = await fetch(`${BASE_URL}/user-requests/${id}`);
  const data = await response.json();
  return data.data;
}

export async function approveUser(id: string) {
  const response = await fetch(`${BASE_URL}/user-requests/approve/${id}`, {
    method: 'POST',
  });
  return response.json();
}

export async function rejectUser(id: string) {
  const response = await fetch(`${BASE_URL}/user-requests/reject/${id}`, {
    method: 'POST',
  });
  return response.json();
}

export async function deleteUser(id: string) {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}

export async function updateUser(id: string, data: any) {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}