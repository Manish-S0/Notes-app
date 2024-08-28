import { MdClose } from "react-icons/md"
import { useState } from "react"
import { axiosInstance } from "../../utils/axiosInstance"
// import { useNavigate } from "react-router-dom"


const AddEditNotes = ({onClose,fetchNotes, type, noteData,showToastMessage}) => {
  const [title, setTitle] = useState(noteData ? noteData.title : '')
  const [content, setContent] = useState(noteData ? noteData.content : '')
  

  const [error, setError] = useState('')
  
  //update note
  const updateNote=async() => {
    try {
      const res = await axiosInstance.put(`/api/notes/update/${noteData._id}`, {
        title, content,
      }, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      })
      if (res.data ) {
        showToastMessage('Note Updated Successfully')
        fetchNotes();
        onClose();
      }
    } 
    catch (error) {
      if (error.res && error.res.data && error.res.data.message) {
        setError(error.res.data.message);
      } 
    }
    
  }

// add note 
  const addNewNote=async() => {
    try {
      const res = await axiosInstance.post('/api/notes/create', {
        title, content,
      }, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      })
      if (res.data) {
        showToastMessage('Note Added Successfully')
        fetchNotes();
        onClose();
      }
    } 
    catch (error) {
      if (error.res && error.res.data && error.res.data.message) {
        setError(error.res.data.message);
      } 

    }
  }


  const handleAddNote = () => {
    if(!title){
      setError('Title is required')
      return
    }
    if(!content){
      setError('Content is required')
      return
    }
    setError('')

    if(type === 'add'){
      addNewNote();
    }

    if(type === 'edit'){
      updateNote()
    }
  }
  return (
    <div className="relative ">
      <button className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 absolute -top-3 -right-3" onClick={() => {onClose()}}>
        <MdClose className="text-xl text-slate-400 cursor-pointer hover:text-primary" />
      </button>

      <div className="flex flex-col gap-2">
        <label htmlFor="title">TITLE</label>
        <input type="text" 
          className='text-2xl text-slate-800 outline-none'
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="content">CONTENT</label>
        <textarea type="text" 
          className='text-xs text-slate-800 outline-none bg-slate-50 p-2 rounded'
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}/>
      </div>

      

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button className="w-full btn-primary font-medium mt-3 p-3" onClick={handleAddNote}>
      {type === 'edit' ? 'Save Changes' : 'Add'}
      </button>
    </div>
  )
}

export default AddEditNotes