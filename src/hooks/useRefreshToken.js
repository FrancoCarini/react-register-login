import axios from "../api/axios"
import useAuth from "./useAuth"

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const { data } = await axios.get("/refresh", {
      withCredentials: true,
    })

    const { accessToken } = data

    setAuth((prev) => {
      return {
        ...prev,
        accessToken,
      }
    })
    return accessToken
  }

  return refresh
}

export default useRefreshToken
