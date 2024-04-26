import { apiUrl, getToken } from "../utils.jsx"

export const getAllPaints = () => {
  return fetch(`${apiUrl}/paints`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const getPaintById = (paintId) => {
  return fetch(`${apiUrl}/paints/${paintId}`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const getPaintsByPaintTypeId = (paintTypeId) => {
  return fetch(`${apiUrl}/paints?paint_type_id=${paintTypeId}`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  }).then((res) => res.json())
}

export const updatePaint = (paint) => {
  return fetch(`${apiUrl}/paints/${paint.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paint),
  })
}
