//++    /$$$$$$   /$$$$$$$   /$$$$$$
//++   /$$__  $$ | $$__  $$ |_  $$_/
//++  | $$  \ $$ | $$  \ $$   | $$
//++  | $$$$$$$$ | $$$$$$$/   | $$
//++  | $$__  $$ | $$____/    | $$
//++  | $$  | $$ | $$         | $$
//++  | $$  | $$ | $$        /$$$$$$
//++  |__/  |__/ |__/       |______/

export const deployUrl = "https://paintkillerz.eheidel.com/api"

//++   /$$$$$$$$  /$$$$$$   /$$   /$$  /$$$$$$$$  /$$   /$$
//++  |__  $$__/ /$$__  $$ | $$  /$$/ | $$_____/ | $$$ | $$
//++     | $$   | $$  \ $$ | $$ /$$/  | $$       | $$$$| $$
//++     | $$   | $$  | $$ | $$$$$/   | $$$$$    | $$ $$ $$
//++     | $$   | $$  | $$ | $$  $$   | $$__/    | $$  $$$$
//++     | $$   | $$  | $$ | $$\  $$  | $$       | $$\  $$$
//++     | $$   |  $$$$$$/ | $$ \  $$ | $$$$$$$$ | $$ \  $$
//++     |__/    \______/  |__/  \__/ |________/ |__/  \__/

export const getToken = () => {
  if (localStorage.getItem("paint_token")) {
    const token = JSON.parse(localStorage.getItem("paint_token")).token
    return token
  } else {
    return null
  }
}

//++   /$$$$$$$    /$$$$$$   /$$$$$$$$  /$$$$$$$$
//++  | $$__  $$  /$$__  $$ |__  $$__/ | $$_____/
//++  | $$  \ $$ | $$  \ $$    | $$    | $$
//++  | $$  | $$ | $$$$$$$$    | $$    | $$$$$
//++  | $$  | $$ | $$__  $$    | $$    | $$__/
//++  | $$  | $$ | $$  | $$    | $$    | $$
//++  | $$$$$$$/ | $$  | $$    | $$    | $$$$$$$$
//++  |_______/  |__/  |__/    |__/    |________/

export const getTodaysDate = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = (now.getMonth() + 1).toString().padStart(2, "0")
  const day = now.getDate().toString().padStart(2, "0")
  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}

//++    /$$$$$$    /$$$$$$    /$$$$$$
//++   /$$__  $$  /$$__  $$  /$$__  $$
//++  | $$  \__/ | $$  \__/ | $$  \__/
//++  | $$       |  $$$$$$  |  $$$$$$
//++  | $$        \____  $$  \____  $$
//++  | $$    $$  /$$  \ $$  /$$  \ $$
//++  |  $$$$$$/ |  $$$$$$/ |  $$$$$$/
//++   \______/   \______/   \______/

export const gradientOne =
  "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"

export const gradientTwo =
  "bg-gradient-to-r from-white via-slate-300 to-slate-500"

export const button =
  "mb-8 mt-6 text-2xl text-white bg-blue-700 border-0 py-4 px-12 focus:outline-none hover:bg-blue-500 rounded-lg shadow-lg"

export const buttonNoMarginNoSize =
  "text-2xl text-white bg-blue-700 border-0  focus:outline-none hover:bg-blue-500 rounded-lg shadow-lg"

export const inputWhiteText =
  "pt-2 pb-2 pl-5 shrink text-3xl rounded-full text-white placeholder-white outline-none focus:placeholder-opacity-0"

export const inputBlackText =
  "pt-2 pb-2 pl-5 shrink text-3xl rounded-full text-black placeholder-white outline-none focus:placeholder-opacity-0"
