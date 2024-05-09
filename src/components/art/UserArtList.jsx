import { useEffect, useState } from "react"
import { getOtherUsersArt } from "../../data/art.jsx"
import { gradientOne } from "../../utils.jsx"

export const UserArtList = () => {
  const [otherUsersArt, setOtherUsersArt] = useState([])

  useEffect(() => {
    getOtherUsersArt().then((res) => {
      if (res) {
        setOtherUsersArt(res)
      }
    })
  }, [])

  const randomSort = (a, b) => {
    return Math.random() - 0.5
  }

  const randomizedArray = otherUsersArt.sort(randomSort)

  return (
    <div>
      {otherUsersArt !== null && (
        <div className="mt-16 mx-36">
          <div className="flex flex-col">
            <div
              className={`${gradientOne} flex flex-col rounded-xl p-8 mt-5 mb-10`}
            >
              <h2 className="font-three text-9xl mb-5 text-white">
                {"User's Art"}
              </h2>
              <div className="flex flex-row flex-wrap justify-evenly">
                {randomizedArray.map((image) => {
                  return (
                    <div
                      key={image.id}
                      className={`bg-slate-200 p-4 rounded-xl w-fit mb-12`}
                    >
                      {
                        <img
                          src={image.image_path}
                          alt="image of other user art"
                          className="size-60 rounded-xl w-fit"
                        />
                      }
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
