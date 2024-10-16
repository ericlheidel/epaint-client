import { deployUrl, getToken } from "../utils.jsx"

export const getUserPayments = () => {
  return fetch(`${deployUrl}/payments`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const deleteUserPayment = (paymentId) => {
  return fetch(`${deployUrl}/payments/${paymentId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  })
}

export const addNewPayment = (newPayment) => {
  return fetch(`${deployUrl}/payments`, {
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
  return fetch(`${deployUrl}/payments/${paymentId}`, {
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
