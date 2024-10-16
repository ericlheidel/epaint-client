import { deployUrl, getToken } from "../utils.jsx"

export const getPaintTypeById = (paintTypeId) => {
  return fetch(`${deployUrl}/painttypes/${paintTypeId}`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
