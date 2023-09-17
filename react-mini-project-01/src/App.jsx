import {  Link, Route, Routes } from "react-router-dom"
import "./App.css"
import Box from "./components/Box"
import Home from "./components/Home"
import Nav from "./components/Nav"

function App() {
  return (
   <>
   <Nav/>
   <Routes>
    <Route path={"/"} element={<Home/>}></Route>
    <Route path={"/box"} element={<Box/>}></Route>
   </Routes>
   </>
  )
}

export default App
