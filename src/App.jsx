import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Appartement from "./pages/appartementsPage"
import Error404 from "./pages/Error404"

import React from 'react'

export default function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/appartement" element={<Appartement/>} />
            <Route path="/*" element={<Error404/>} />

        </Routes>
    </div>
  )
}

