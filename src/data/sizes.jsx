import { apiUrl, getToken } from "../utils.jsx"

export const getAllSizes = () => {
  return fetch(`${apiUrl}/sizes`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const getSizeById = (id) => {
  return fetch(`${apiUrl}/sizes/${id}`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
