import Navbar from "../components/Navbar"

import { Link } from "react-router-dom"
import Password from "../components/Password"
import { useState } from "react"
import { validateEmail } from "../utils/helper"
import {axiosInstance} from "../utils/axiosInstance"
import { useNavigate } from "react-router-dom"



const SignUp = () => {

 

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  
  const navigate=useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    } 

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } 

    setError("");

    //signup api call
    try {
      const res=await axiosInstance.post('/api/users/signup', { name,email, password });
      if (res.data && res.data.token) {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
        
      }

    } catch (err) {
      if (err.res && err.res.data && err.res.data.message) {
        setError(err.res.data.message);
        return;
      }else{
        setError("Something went wrong");
      }
      
    }

    
  }

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center mt-24">

        <div className="w-[310px] border rounded bg-white px-7 py-10">

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            <h2 className="text-3xl mb-7">Sign Up</h2>

            <input type="text" 
              placeholder="Name"
              value={name} 
              onChange={(e) => { setName(e.target.value) }}
              className="input-box max-w-xs" />

            <input type="text" 
              placeholder="Email"
              value={email} 
              onChange={(e) => { setEmail(e.target.value) }}
              className="input-box max-w-xs" />

            
            <Password  placeholder="Password" 
              value={password} 
              onChange={(e) => {setPassword(e.target.value) }}
            />

            {error && <p className="text-red-500 text-xs pb-1"> {error} </p>}

            <button type="submit" className="btn btn-primary">Sign Up</button>

            <p className="text-center mt-4 text-sm">
              Already registered?{" "}
              <Link to='/login' className="text-primary font-medium">Login</Link>
            </p>


          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp