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

export const addNewPayment = (payment) => {
  return fetch(`${apiUrl}/payments`, {
    method: "POST",
    headers: {
      Authorization: `Token ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payment.newPaymentName,
      acct_number: payment.newAcctNumber,
      ex_date: payment.newExDate,
    }),
  })
}
