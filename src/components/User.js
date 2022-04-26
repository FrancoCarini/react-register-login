import { Link } from "react-router-dom"

const User = () => {
  return (
    <section>
      <h1>Users Page</h1>
      <br />
      <br />
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  )
}

export default User
