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

export const gradient =
  "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"

export const button =
  "mb-8 mt-6 text-2xl text-white bg-blue-700 border-0 py-4 px-12 focus:outline-none hover:bg-blue-500 rounded-lg shadow-lg"

export const input =
  "pt-2 pb-2 pl-5 shrink w-2/3 text-3xl rounded-full text-white placeholder-white outline-none focus:placeholder-opacity-0"
