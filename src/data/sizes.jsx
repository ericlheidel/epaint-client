import { deployUrl, getToken } from "../utils.jsx"

export const getAllSizes = () => {
  return fetch(`${deployUrl}/sizes`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const getSizeById = (id) => {
  return fetch(`${deployUrl}/sizes/${id}`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
