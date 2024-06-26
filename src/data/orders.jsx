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

export const getClosedOrders = () => {
  return fetch(`${apiUrl}/orders?closed=true`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const getOrderById = (orderId) => {
  return fetch(`${apiUrl}/orders/${orderId}`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
