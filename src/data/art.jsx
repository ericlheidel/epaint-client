import { apiUrl, getToken } from "../utils.jsx"

export const getOtherUsersArt = () => {
  return fetch(`${apiUrl}/userartimages/all`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
