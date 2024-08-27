
import { getInitials } from '../../utils/helper'
const ProfileInfo = ({ user,onLogout}) => {
  return (
    <div className='flex justify-between items-center gap-3'>
      <div className='w-12 h-12 justify-center items-center flex  rounded-full bg-slate-100 font-medium'> 
        {getInitials(user.name)}
      </div>
      <div>
        <p className='font-medium text-sm'>{user.name}</p>
        <button className='text-sm text-slate-700 underline' onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
}

export default ProfileInfo