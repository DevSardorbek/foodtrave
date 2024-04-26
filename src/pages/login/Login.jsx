import React , {useState} from 'react'
import NavbarTop from "../../components/navbar/NavbarTop"
import NavbarBotttom from '../../components/navbar/NavbarBottom'
import Lines from "../../components/lines/Lines"
import logo from "../../assets/images/logo.png"
import { NavLink, useNavigate } from 'react-router-dom'
import "../../sass/__login.scss"
import Footer from '../../components/footer/Footer'
import axios from '../../api/index'
import { toast } from 'react-toastify'

const Login = () => {
  const [username , setUsername] = useState("atuny0")
  const [password , setPassword] = useState("9uQFF1Lh")
  const [loading , setLoading] = useState(false)
  let navigate = useNavigate()
  const handeLogin = (e)=>{
    setLoading(true)
    e.preventDefault()
    let user = {
      username, 
      password
    }
    axios
        .post("/auth/login", user)
        .then(res=>{
          console.log(res.data.token)
          toast.success("welcome")
          localStorage.setItem("token" ,res.data.token )
          navigate("/admin")
          window.location.reload()  

        })
        .catch(err=>{
          console.log(err)
          toast.error("username or password is incorrect")
        })
        .finally(()=>{setLoading(false)})

     
    setUsername("")
    setPassword("")
  }
  return (
    <>
        <NavbarTop/>
        <NavbarBotttom/>
        <Lines/>
        <div className='registor__wrapper'>
          <div className='registor'>
              <NavLink>
                <img src={logo} alt="" />
              </NavLink>
              <form onSubmit={handeLogin}>
                  <label className='label1'>
                    <p>Email Address*</p>
                    <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder='Enter Your Email' />
                  </label>
                  <label className='label2'>
                    <p>Password*</p>
                    <input  type="password" placeholder='Enter Your password'  value={password} onChange={(e)=> setPassword(e.target.value)}  />
                  </label>
                  <div className='forward'>
                    <label className='label3'>
                      <input type="checkbox" />
                      <p>Remember Me</p>
                    </label>
                    <h3>Forgot Password?</h3>
                  </div>
                  <div className='login_btn'>
                    <button disabled={loading}>{loading ?"loading...":"Login"}</button>
                    <button>Signup?</button>
                  </div>
              </form>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Login