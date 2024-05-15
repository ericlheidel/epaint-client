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

export const addNewPayment = (newPayment) => {
  return fetch(`${apiUrl}/payments`, {
    method: "POST",
    headers: {
      Authorization: `Token ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newPayment.newPaymentName,
      acct_number: newPayment.newAcctNumber,
      ex_date: newPayment.newExDate,
    }),
  })
}

export const updateUserPayment = (paymentId, updatedPayment) => {
  return fetch(`${apiUrl}/payments/${paymentId}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: updatedPayment.updatedPaymentName,
      acct_number: updatedPayment.updatedAcctNumber,
      ex_date: updatedPayment.updatedExDate,
    }),
  })
}
