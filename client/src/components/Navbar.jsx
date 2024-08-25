import { useState } from "react"
import ProfileInfo from "./Cards/ProfileInfo"
import { useNavigate } from "react-router-dom"
import Search from "./SearchBox/Search"

const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState("")

  const Navigate = useNavigate()

  const onLogout = () => {
    localStorage.removeItem("token")
    Navigate('/login')
  }

  const onChange = (e) => {
    setSearchQuery(e.target.value)  
  }

  return (
    <div className="bg-white flex items-center justify-between px-4 py-3 drop-shadow">
    <div className="text-xl font-medium text-black py-2">Notes</div>
    <Search 
    value={searchQuery} 
    onChange={onChange} 
    onClearSearch={() => setSearchQuery("")}/>
      <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default Navbar