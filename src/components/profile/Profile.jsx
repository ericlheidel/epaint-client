import { useEffect, useState } from "react"
import { getProfile } from "../../data/profile.jsx"

export const Profile = () => {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfile().then((res) => {
      setProfile(res)
    })
  }, [])

  return (
    <div>
      <div>
        <div></div>
      </div>
    </div>
  )
}
