import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Register from "./components/Register"
import Login from "./components/Login"
import Missing from "./components/Missing"
import LinkPage from "./components/LinkPage"
import Unauthorized from "./components/Unauthorized"
import Home from "./components/Home"
import Admin from "./components/Admin"
import User from "./components/User"
import Lounge from "./components/Lounge"
import RequireAuth from "./components/RequireAuth"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={["user", "admin"]} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["user", "admin"]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["admin"]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["user"]} />}>
          <Route path="user" element={<User />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  )
}

export default App
