import { deployUrl, getToken } from "../utils.jsx"

export const getOtherUsersArt = () => {
  return fetch(`${deployUrl}/userartimages/all`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
