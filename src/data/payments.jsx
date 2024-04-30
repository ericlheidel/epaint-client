import { apiUrl, getToken } from "../utils.jsx"

export const getUserPayments = () => {
  return fetch(`${apiUrl}/payments`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const deleteUserPayment = (paymentId) => {
  return fetch(`${apiUrl}/payments/${paymentId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  })
}
