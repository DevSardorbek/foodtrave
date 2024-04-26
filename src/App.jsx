import React from "react"
import {Routes , Route} from "react-router-dom"
// import NavbarTop from "./components/navbar/NavbarTop"
// import NavbarBotttom from "./components/navbar/NavbarBottom"
// import Banner from "./components/banner/Banner"
// import Prodact from "./components/prodact/Prodact"
// import Deliver from "./components/deliver/Deliver"
// import Footer from "./components/footer/Footer"
// import Lines from "./components/lines/Lines"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Admin from "./pages/admin/Admin"
import Auth from "./pages/auth/Auth"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
   <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="login" element={<Login/>} />
       <Route path="/" element={<Auth/>}>
          <Route path="admin" element={<Admin/>} />
       </Route>
   </Routes>
   <ToastContainer/>
    </>
  )
}

export default App
