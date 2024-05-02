import { apiUrl, getToken } from "../utils.jsx"

export const getProfile = () => {
  return fetch(`${apiUrl}/profile`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const getUserImage = () => {
  return fetch(`${apiUrl}/userimages`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const postUserImage = () => {
  return fetch(`${apiUrl}/userimages`, {
    method: "POST",
    headers: {
      Authorization: `Token ${getToken()}`,
      "Content-Type": "application/json",
    },
  })
}
