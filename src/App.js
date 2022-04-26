import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Register from "./components/Register"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
