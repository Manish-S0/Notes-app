import { MdClose } from "react-icons/md"
import { useState } from "react"


const AddEditNotes = ({onClose, type, data}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState([])

  const [error, setError] = useState('')
  const addNewNote=async() => {}
  const updateNote=async() => {}

  const handleAddNote = () => {

    if(!title){
      setError({
        ...error,
        title: 'Title is required'
      })
      return
    }

    if(!content){
      setError({
        ...error,
        content: 'Content is required'
      })
      return
    }
    setError({})
    if(type === 'add'){
      addNewNote()
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
        />

      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="content">CONTENT</label>
        <textarea type="text" 
          className='text-xs text-slate-800 outline-none bg-slate-50 p-2 rounded'
          placeholder="content"
          rows={10}/>
      </div>

      <div className="mt-4">
        <label htmlFor="tags" className="input-label">TAGS</label>
      </div>

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button className="w-full btn-primary font-medium mt-3 p-3" onClick={() => {handleAddNote()}}>
      Add
      </button>
    </div>
  )
}

export default AddEditNotes