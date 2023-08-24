import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Appartement from "./pages/Appartement"
import Error404 from "./pages/Error404"

import React from 'react'

export default function Router() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/appartement/:id" element={<Appartement/>} />
            <Route path="/*" element={<Error404/>} />
        </Routes>
    </div>
  )
}

