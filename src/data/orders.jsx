import { apiUrl, getToken } from "../utils.jsx"

export const closeOrder = (order, orderId) => {
  return fetch(`${apiUrl}/orders/${orderId}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
}
