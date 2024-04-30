import { apiUrl, getToken } from "../utils.jsx"

export const getUserPayments = () => {
  return fetch(`${apiUrl}/payments`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
