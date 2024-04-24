import { apiUrl, getToken } from "../utils.jsx"

export const loginUser = (username, password) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
}

export const getUserProfile = () => {
  return fetch(`${apiUrl}/profile`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  })
}

export const registerUser = (user) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
}
