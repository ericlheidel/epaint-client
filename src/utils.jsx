export const apiUrl = "http://localhost:8000"

export const getToken = () => {
  if (localStorage.getItem("paint_token")) {
    const token = JSON.parse(localStorage.getItem("paint_token")).token
    return token
  } else {
    return null
  }
}

export const getTodaysDate = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = (now.getMonth() + 1).toString().padStart(2, "0")
  const day = now.getDate().toString().padStart(2, "0")
  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}
