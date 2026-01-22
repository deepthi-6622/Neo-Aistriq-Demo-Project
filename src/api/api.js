// This function fetches the user's Discord profile
// "token" is the accessToken returned after login
export async function getUserInfo(token) {
  // Sending request to backend `/me` route
  const res = await fetch("http://localhost:5000/me", {
    headers: {
      Authorization: `Bearer ${token}`,//Token is required to identify the user
    },
  });

  if (!res.ok) {
    throw new Error("Invalid token");// If token is invalid → throw error
  }
  return res.json();
}
