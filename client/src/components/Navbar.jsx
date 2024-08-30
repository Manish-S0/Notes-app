import { useState } from "react"
import ProfileInfo from "./Cards/ProfileInfo"
import { useNavigate,useLocation } from "react-router-dom"
import Search from "./SearchBox/Search"

const Navbar = ({user,SearchNote,handleClearSearch}) => {

  const location = useLocation()

  const [searchQuery, setSearchQuery] = useState("")

  const Navigate = useNavigate()

  const onLogout = () => {
    localStorage.removeItem("token")
    Navigate('/login')
  }

  
  const handleSearch=()=>{
    if(searchQuery) {
      SearchNote(searchQuery)
    }
  }
  const onClearSearch=()=>{
    setSearchQuery("")
    handleClearSearch()
  }

  return (
    <div className="bg-white flex items-center justify-between px-4 py-3 drop-shadow">
    <div className="text-xl font-medium text-black py-2">Notes</div>
    <Search 
    value={searchQuery} 
    onChange={e => setSearchQuery(e.target.value)} 
    handleSearch={handleSearch}
    onClearSearch={onClearSearch}/>

    {/* {location.pathname==="/dashboard" &&
      <ProfileInfo user={user} onLogout={onLogout}/>
    } */}
    </div>
  )
}

export default Navbar