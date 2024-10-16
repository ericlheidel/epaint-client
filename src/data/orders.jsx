import { deployUrl, getToken } from "../utils.jsx"

export const closeOrder = (order, orderId) => {
  return fetch(`${deployUrl}/orders/${orderId}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
}

export const getClosedOrders = () => {
  return fetch(`${deployUrl}/orders?closed=true`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const getOrderById = (orderId) => {
  return fetch(`${deployUrl}/orders/${orderId}`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}
