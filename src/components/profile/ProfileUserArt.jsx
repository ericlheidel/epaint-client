import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { getUserArtImages, postUserArtImage } from "../../data/profile.jsx"
import { buttonNoMarginNoSize, getToken, gradientOne } from "../../utils.jsx"

export const UserArt = ({ profile }) => {
  const [userArtImages, setUserArtImages] = useState([])
  const [base64String, setBase64String] = useState(null)
  const [fileName, setFileName] = useState("")

  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    getUserArtImages().then((res) => {
      if (res) {
        setUserArtImages(res)
      }
    })
  }, [refresh])

  const handleUploadUserArtImage = () => {
    if (base64String === null) {
      window.alert("Please choose an image")
    } else {
      setFileName("")
      const userArtImageToUpload = {
        image_path: base64String,
        user_token: getToken(),
      }
      postUserArtImage(userArtImageToUpload).then(() => {
        getUserArtImages().then((res) => {
          setUserArtImages(res)
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

  const createUserArtImageString = (e) => {
    getBase64(e.target.files[0], (base64ImageString) => {
      setBase64String(base64ImageString)
    })
  }

  useEffect(() => {
    const fileInputTwo = document.getElementById("fileInputTwo")
    const customFileButtonTwo = document.getElementById("customFileButtonTwo")

    const handleCustomFileButtonTwoClick = () => {
      fileInputTwo.click()
    }

    const handleFileInputTwoChange = () => {
      setFileName(fileInputTwo.files[0].name)
    }

    customFileButtonTwo?.addEventListener(
      "click",
      handleCustomFileButtonTwoClick
    )
    fileInputTwo?.addEventListener("change", handleFileInputTwoChange)

    return () => {
      customFileButtonTwo?.removeEventListener(
        "click",
        handleCustomFileButtonTwoClick
      )
      fileInputTwo?.removeEventListener("change", handleFileInputTwoChange)
    }
  }, [])

  return (
    <>
      <div className="mt-8">
        <div className="flex flex-col">
          <div
            className={`${gradientOne} flex flex-col rounded-xl p-8 mt-5 mb-10`}
          >
            <h2 className="font-two text-7xl mb-2 text-white">
              Upload Your Art
            </h2>
            <div className="flex flex-row">
              <input
                type="file"
                id="fileInputTwo"
                hidden
                className={`text-4xl mb-5 text-white`}
                onChange={createUserArtImageString}
              />
              <input
                type="hidden"
                id="user_img"
                value={profile?.user_id || ""}
              />
              <button
                id="customFileButtonTwo"
                className={`${buttonNoMarginNoSize} w-48 h-16 mb-5 mx-5 mt-5`}
              >
                Choose Image
              </button>
              <div className="text-center">
                <h2 className="text-4xl mt-8 text-white">{fileName}</h2>
              </div>
              <button
                className={`${buttonNoMarginNoSize} w-48 h-16 mx-5 ml-5 mt-5`}
                onClick={handleUploadUserArtImage}
              >
                Upload Image
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${gradientOne} w-3/4 h-3/4 p-12 rounded-3xl`}>
        <h2 className="font-three text-9xl mb-5 text-white">My Art</h2>
        <div className="flex flex-row flex-wrap justify-evenly">
          {userArtImages.map((image) => {
            return (
              <div
                key={image.id}
                className={`bg-slate-200 p-4 rounded-xl w-fit mb-12`}
              >
                <img
                  src={image.image_path}
                  alt="image of art"
                  className="size-60 rounded-xl w-fit"
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

UserArt.propTypes = {
  profile: PropTypes.object,
}
