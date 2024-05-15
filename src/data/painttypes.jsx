import { apiUrl, getToken } from "../utils.jsx"

export const getPaintTypeById = (paintTypeId) => {
  return fetch(`${apiUrl}/painttypes/${paintTypeId}`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
