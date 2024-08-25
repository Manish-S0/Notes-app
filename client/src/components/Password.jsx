import {useState} from 'react'
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";

const Password = ({value,onChange,placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
      <div className='flex items-center bg-transparent px-3 border-[1.5px] rounded-md'>
        <input type={showPassword ? "text" : "password"} 
          value={value} 
          onChange={onChange} 
          placeholder={placeholder || "Password"} className='w-full py-2 mr-3 bg-transparent outline-none'
        />

        {showPassword ?<FaRegEye size={20} onClick={togglePassword} className='text-primary cursor-pointer' /> : <FaRegEyeSlash size={20} onClick={togglePassword} className='text-slate-400 cursor-pointer' />}
    </div>
  )
}

export default Password