import { apiUrl, getToken } from "../utils.jsx"

export const getProfile = () => {
  return fetch(`${apiUrl}/profile`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
