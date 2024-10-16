import { deployUrl, getToken } from "../utils.jsx"

export const loginUser = (username, password) => {
  return fetch(`${deployUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
}

export const getUserProfile = () => {
  return fetch(`${deployUrl}/profile`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  })
}

export const registerUser = (user) => {
  return fetch(`${deployUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
}
