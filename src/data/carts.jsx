import { deployUrl, getToken } from "../utils.jsx"

export const getCart = () => {
  return fetch(`${deployUrl}/cart`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
