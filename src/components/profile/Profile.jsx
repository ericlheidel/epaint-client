import { useEffect, useState } from "react"
import { getProfile, getUserImage, postUserImage } from "../../data/profile.jsx"
import {
  buttonNoMarginNoSize,
  getToken,
  gradientOne,
  gradientTwo,
} from "../../utils.jsx"
import { UserArt } from "./UserArt.jsx"

export const Profile = () => {
  const [profile, setProfile] = useState({})
  const [userImage, setUserImage] = useState(null)
  const [base64String, setBase64String] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const [fileName, setFileName] = useState("")

  useEffect(() => {
    getProfile().then((res) => {
      if (res) {
        setProfile(res)
      }
    })
  }, [refresh])

  useEffect(() => {
    getUserImage().then((res) => {
      if (res) {
        setUserImage(res)
      }
    })
  }, [refresh])

  const handleUploadUserImage = () => {
    if (base64String === null) {
      window.alert("Please choose an image")
    } else {
      setFileName("")
      const userImageToUpload = {
        image_path: base64String,
        user_token: getToken(),
      }
      postUserImage(userImageToUpload).then(() => {
        getUserImage().then((res) => {
          setUserImage(res)
        })
      })
      setRefresh(true)
    }
  }

  const getBase64 = (file, callback) => {
    const reader = new FileReader()
    reader.addEventListener("load", () => callback(reader.result))
    reader.readAsDataURL(file)
  }

  const createUserImageString = (e) => {
    getBase64(e.target.files[0], (base64ImageString) => {
      setBase64String(base64ImageString)
    })
  }

  useEffect(() => {
    const fileInput = document.getElementById("fileInput")
    const customFileButton = document.getElementById("customFileButton")

    const handleCustomFileButtonClick = () => {
      fileInput.click()
    }

    const handleFileInputChange = () => {
      setFileName(fileInput.files[0].name)
    }

    customFileButton?.addEventListener("click", handleCustomFileButtonClick)
    fileInput?.addEventListener("change", handleFileInputChange)

    return () => {
      customFileButton?.removeEventListener(
        "click",
        handleCustomFileButtonClick
      )
      fileInput?.removeEventListener("change", handleFileInputChange)
    }
  }, [])

  return (
    <div className="mt-8 flex flex-col justify-center items-center">
      <div className={`${gradientOne} px-12 py-4 rounded-3xl shadow-2xl w-fit`}>
        <h2 className="font-two mb-8 text-9xl text-white">Profile</h2>
        {userImage != null ? (
          <div className={`bg-slate-200 p-4 rounded-xl w-80`}>
            <img
              src={userImage?.image_path}
              alt="user avatar"
              draggable="false"
              className="size-full rounded-xl"
            />
          </div>
        ) : (
          <div className="flex flex-col">
            <h2 className="text-4xl mb-2 text-white">Add an image</h2>
            <h2 className="text-4xl mb-5 text-white">of yourself</h2>
            <input
              type="file"
              id="fileInput"
              hidden
              className={`text-4xl mb-5 text-white`}
              onChange={createUserImageString}
            />
            {/* <input type="hidden" id="user_img" value={profile?.user_id || ""} /> */}
            <button
              id="customFileButton"
              className={`${buttonNoMarginNoSize} w-48 h-16 mb-5`}
            >
              Choose Image
            </button>
            <div className="text-4xl mb-5 text-white mr-auto">{fileName}</div>
            <button
              className={`${buttonNoMarginNoSize} w-48 h-16 mb-5`}
              onClick={handleUploadUserImage}
            >
              Upload Image
            </button>
          </div>
        )}
        <div>
          <div className="font-one text-5xl mb-2 text-left mt-5 text-white">
            {profile.user?.first_name} {profile.user?.last_name}
          </div>
        </div>
      </div>
      <UserArt profile={profile} />
    </div>
  )
}
