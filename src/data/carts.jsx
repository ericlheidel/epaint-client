import { apiUrl, getToken } from "../utils.jsx"

export const getCart = () => {
  return fetch(`${apiUrl}/profile/cart`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
