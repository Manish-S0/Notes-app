import React from 'react'
import { getInitials } from '../../utils/helper'
const ProfileInfo = ({onLogout}) => {
  return (
    <div className='flex justify-between items-center gap-3'>
      <div className='w-12 h-12 justify-center items-center flex  rounded-full bg-slate-100 font-medium'> 
        {getInitials("manish kumar")}
      </div>
      <div>
        <p>Name</p>
        <button className='text-sm text-slate-700 underline' onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
}

export default ProfileInfo