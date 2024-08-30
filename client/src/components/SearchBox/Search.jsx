
import {FaMagnifyingGlass} from 'react-icons/fa6'
import {IoMdClose} from 'react-icons/io'
const Search = ({value,onChange,handleSearch,onClearSearch}) => {
  return (
    <div className='w-80 flex items-center px-4 bg-slate-100 rounded-md'>
      <input type="text" 
      value={value} 
      placeholder="Search Notes"
      onChange={onChange} className=" w-full text-xs bg-transparent py-[10px] outline-none" />


      {value && <IoMdClose size={20} onClick={onClearSearch} className='text-slate-400 cursor-pointer hover:text-black mr-3' />}

      <FaMagnifyingGlass size={20}  onClick={handleSearch} className='text-slate-400 cursor-pointer hover:text-black' />

      
    </div>
  )
}

export default Search