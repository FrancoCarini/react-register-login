import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import useAxiosPrivate from "../hooks/useAxiosPrivate"

export const Users = () => {
  const [users, setUsers] = useState()
  const axiosPrivate = useAxiosPrivate()

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Cancel request is component is unmounted
    let isMounted = true
    const controller = new AbortController()

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/users", {
          signal: controller.signal,
        })
        isMounted && setUsers(response.data)
      } catch (error) {
        navigate("/login", {
          state: {
            from: location,
          },
          replace: true,
        })
      }
    }
    getUsers()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  return (
    <article>
      <h2>Users List</h2>
      {users?.lenght ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </article>
  )
}

export default Users
