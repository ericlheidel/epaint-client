import { deployUrl, getToken } from "../utils.jsx"

export const getProfile = () => {
  return fetch(`${deployUrl}/profile`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const getUserImage = () => {
  return fetch(`${deployUrl}/userimages`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const postUserImage = (userImage) => {
  return fetch(`${deployUrl}/userimages`, {
    method: "POST",
    headers: {
      Authorization: `Token ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userImage),
  })
}

export const deleteUserImage = (userImageId) => {
  return fetch(`${deployUrl}/userimages/${userImageId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  })
}

export const postUserArtImage = (userArtImage) => {
  return fetch(`${deployUrl}/userartimages`, {
    method: "POST",
    headers: {
      Authorization: `Token ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userArtImage),
  })
}

export const getUserArtImages = () => {
  return fetch(`${deployUrl}/userartimages`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
