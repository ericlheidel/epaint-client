import { useEffect, useState } from "react"
import { getProfile, getUserImage, postUserImage } from "../../data/profile.jsx"
import { getToken } from "../../utils.jsx"

export const Profile = () => {
  const [profile, setProfile] = useState({})
  const [userImage, setUserImage] = useState(null)
  const [base64String, setBase64String] = useState(null)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    getProfile().then((res) => {
      setProfile(res)
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
    const userImageToUpload = {
      base64String,
      // image_path: base64String,
      // user_token: getToken(),
    }
    console.log(userImageToUpload)

    if (base64String === "") {
      window.alert("Please choose an image")
    } else {
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
      // console.log(e.target.files[0])
      console.log("Base64 of file is", base64ImageString)
      setBase64String(base64ImageString)
      // console.log(base64String)
    })
  }

  return (
    <div className="flex flex-col">
      <div className="mr-auto ml-5">
        {userImage == null ? (
          <>
            <img
              src={userImage?.image_path}
              alt="user avatar"
              draggable="false"
              className="size-56"
            />
          </>
        ) : (
          <div className="flex flex-col">
            <h2>Add a image of yourself</h2>
            <input
              type="file"
              id="user_image"
              onChange={createUserImageString}
            />
            <input type="hidden" id="user_imd" value={profile?.user_id} />
            <button className="test w-fit" onClick={handleUploadUserImage}>
              Save Image
            </button>
          </div>
        )}
        <div>
          <div className="mr-auto ml-5 w-fit">
            {profile.user?.first_name} {profile.user?.last_name}
          </div>
        </div>
      </div>
    </div>
  )
}
