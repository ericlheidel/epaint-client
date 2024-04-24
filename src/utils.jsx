export const apiUrl = "http://localhost:8000"

export const getToken = () => {
  if (localStorage.getItem("paint_token")) {
    const token = JSON.parse(localStorage.getItem("paint_token")).token
    return token
  } else {
    return null
  }
}
